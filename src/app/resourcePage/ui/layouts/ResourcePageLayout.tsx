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

type Props = Readonly<{
    params: { username: string }; 
    activeTabKey: ResourcePageTabKey;
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

export default async function ResourcePageLayout({ children, params, activeTabKey }: Props) {
    const { username } = params;

    const user = await userApiAdapter.getUserProfile(username);

    const wantlistTabLabel = getWantlistLabel(user.wantlistTotal);
    const collectionTabLabel = getCollectionLabel(user.collectionTotal);
    const activeTotal = activeTabKey === ResourcePageTabKey.collection
        ? user.collectionTotal
        : user.wantlistTotal;

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
                        items={
                            [
                                {
                                    label: collectionTabLabel,
                                    key: ResourcePageTabKey.collection,
                                    children: activeTabKey === ResourcePageTabKey.collection ? <>
                                        <ResourcePageControls />
                                        {children}
                                    </> : null,
                                },
                                {
                                    label: wantlistTabLabel,
                                    key: ResourcePageTabKey.wantlist,
                                    children: activeTabKey === ResourcePageTabKey.wantlist ? <>
                                        <ResourcePageControls />
                                        {children}
                                    </> : null,
                                }
                            ]
                        }
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
