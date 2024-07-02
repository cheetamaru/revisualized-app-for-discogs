import ResourcePageControls from "@/app/resourcePage/ui/components/ResourcePageControls";
import ResourcePageHeader from "@/app/resourcePage/ui/components/ResourcePageHeader";
import ResourcePageTabs from "@/app/resourcePage/ui/components/ResourcePageTabs";
import userApiAdapter from "@/app/user/adapters/userApiAdapter";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

type Props = Readonly<{
    params: { username: string }; 
    children: React.ReactNode;
  }>

export default async function LayoutWantlist({ children, params }: Props) {
    const { username } = params;

    const user = await userApiAdapter.getUserProfile(username);

    return (
      <>
        <Layout style={{minHeight: "100vh"}}>
            <Header style={{display: "flex", justifyContent: "center"}}>
                <ResourcePageHeader user={user}/>
            </Header>
            <Layout style={{ width: "100%", alignSelf: 'center'}}>
                <Content>
                    <ResourcePageTabs
                        username={username}
                        items={
                            [
                                {
                                    label: `Wantlist — ${user.wantlistTotal} items`,
                                    key: "wantlist",
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
            </Layout>
        </Layout>
      </>
    )
  }