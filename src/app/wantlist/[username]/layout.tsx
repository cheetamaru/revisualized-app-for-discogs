import ResourcePageControls from "@/app/resourcePage/ui/components/ResourcePageControls";
import ResourcePageHeader from "@/app/resourcePage/ui/components/ResourcePageHeader";
import userApiAdapter from "@/app/user/adapters/userApiAdapter";
import { Layout, Tabs } from "antd";
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
                    <Tabs
                        centered
                        size="small"
                        tabBarStyle={{
                            marginBottom: 2
                        }}
                        items={[
                            {
                                label: `Wantlist — ${user.wantlistTotal} items`,
                                key: "wantlist",
                                children: <>
                                    <ResourcePageControls />
                                    {children}
                                </>,
                            },
                            // {
                            //     label: `Collection — ${user.num_collection} items`,
                            //     key: "collection",
                            //     children: "Empty"
                            // }
                        ]}
                    />
                </Content>
            </Layout>
        </Layout>
      </>
    )
  }