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
} = ResourcePageTabsDomain;

export default async function ResourcePageLayout({ children, params }: Props) {
    const { username } = params;

    const user = await userApiAdapter.getUserProfile(username);

    const wantlistTabLabel = getWantlistLabel(user.wantlistTotal);

    return (
      <>
        <Layout style={mainLayoutStyle}>
            <Header style={headerStyle}>
                <ResourcePageHeader user={user}/>
            </Header>
            <Layout style={containerLayoutStyle}>
                <Content>
                    <ResourcePageTabs
                        username={username}
                        items={
                            [
                                {
                                    label: wantlistTabLabel,
                                    key: ResourcePageTabKey.wantlist,
                                    children: <>
                                        <ResourcePageControls />
                                        {children}
                                    </>,
                                },
                                // {
                                //     label: `Collection — ${user.collectionTotal} items`,
                                //     key: "collection",
                                //     children: <>
                                //         <ResourcePageControls />
                                //         {children}
                                //     </>,
                                // }
                            ]
                        }
                    />
                </Content>
                <ResourcePagePagination
                    totalPages={user.wantlistTotal}
                    style={paginationStyle}
                />
            </Layout>
        </Layout>
      </>
    )
  }
