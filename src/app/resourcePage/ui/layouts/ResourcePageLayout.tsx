import ResourcePageControls from "@/app/resourcePage/ui/components/ResourcePageControls";
import ResourcePageHeader from "@/app/resourcePage/ui/components/ResourcePageHeader";
import ResourcePageTabs from "@/app/resourcePage/ui/components/ResourcePageTabs";
import userApiAdapter from "@/app/user/adapters/userApiAdapter";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { ResourcePageTabKey } from "../../domain/ResourcePageTabKey";
import { resourcePagePayloutStyle } from "./style/resourcePageLayoutStyle";
import { ResourcePageTabsDomain } from "../../domain/ResourcePageTabsDomain";
import ResourcePagePagination from "../components/ResourcePagePagination";
import ErrorWithSearcher from "@/shared/ui/components/global/ErrorWithSearcher";
import { UserResourcesDomain } from "@/app/user/domain/UserResourcesDomain";
import { redirect } from "next/navigation";
import { ResourcePageSearchParams } from "../../types/ResourcePageSearchParams";

type Props = Readonly<{
    params: { username: string }; 
    activeTabKey: ResourcePageTabKey;
    searchParams?: ResourcePageSearchParams;
    children: React.ReactNode;
  }>

const {
    mainLayoutStyle,
    headerStyle,
    containerLayoutStyle,
    paginationStyle,
} = resourcePagePayloutStyle;

const {
    getWantlistLabel,
    getCollectionLabel,
} = ResourcePageTabsDomain;

const unavailableResourcesMessage = "This user's collection and wantlist are private or empty";

export default async function ResourcePageLayout({ children, params, activeTabKey, searchParams }: Props) {
    const { username } = params;

    const user = await userApiAdapter.getUserProfileForResources(username);

    if (!UserResourcesDomain.hasAnyContent(user)) {
        return <ErrorWithSearcher message={unavailableResourcesMessage} />;
    }

    const resolvedTabKey = UserResourcesDomain.getFallbackTabKey(user, activeTabKey);

    if (resolvedTabKey && resolvedTabKey !== activeTabKey) {
        const query = new URLSearchParams();
        Object.entries(searchParams ?? {}).forEach(([key, value]) => {
            if (value !== undefined) query.set(key, value);
        });
        redirect(ResourcePageTabsDomain.getRouteByKey(resolvedTabKey, username, query.toString()));
    }

    const hasCollectionAccess = UserResourcesDomain.hasCollectionAccess(user);
    const hasWantlistAccess = UserResourcesDomain.hasWantlistAccess(user);
    const wantlistTabLabel = getWantlistLabel(user.wantlistTotal ?? 0);
    const collectionTabLabel = getCollectionLabel(user.collectionTotal ?? 0);
    const activeTotal = activeTabKey === ResourcePageTabKey.collection
        ? user.collectionTotal ?? 0
        : user.wantlistTotal ?? 0;

    const tabItems = [
        hasCollectionAccess ? {
            label: collectionTabLabel,
            key: ResourcePageTabKey.collection,
            children: activeTabKey === ResourcePageTabKey.collection ? <>
                <ResourcePageControls />
                {children}
            </> : null,
        } : null,
        hasWantlistAccess ? {
            label: wantlistTabLabel,
            key: ResourcePageTabKey.wantlist,
            children: activeTabKey === ResourcePageTabKey.wantlist ? <>
                <ResourcePageControls />
                {children}
            </> : null,
        } : null,
    ].filter((item): item is NonNullable<typeof item> => item !== null);

    return (
      <>
        <Layout style={mainLayoutStyle}>
            <Header style={headerStyle}>
                <ResourcePageHeader user={user} activeTabKey={activeTabKey}/>
            </Header>
            <Layout style={containerLayoutStyle}>
                <Content>
                    <ResourcePageTabs
                        username={username}
                        activeKey={activeTabKey}
                        items={tabItems}
                    />
                </Content>
                <ResourcePagePagination
                    totalPages={activeTotal}
                    style={paginationStyle}
                />
            </Layout>
        </Layout>
      </>
    )
  }
