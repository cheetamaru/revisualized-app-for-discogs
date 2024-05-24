import UserInfo from "@/app/components/user/UserInfo";
import { getUserOnServer } from "./utils/getUserOnServer";
import { getWantlistOnServer } from "./utils/getWantlistOnServer";
import WantlistEntry from "@/app/components/wantlist/WantlistEntry";
import UsernameInput from "@/app/components/user/UsernameInput";
import { Button, Flex, Layout, Space } from "antd";
import style from "./page.module.css"
import { Header, Content } from "antd/es/layout/layout";
import UserAvatar from "@/app/components/user/UserAvatar";

const WantlistPage = async ({params}: { params: { username: string } }) => {
    const { username } = params;

    const user = await getUserOnServer(username);
    const wantlist = await getWantlistOnServer(username)

    return (
        <>
            <Layout>
                <Header style={{display: "flex", justifyContent: "center"}}>
                    <Space align="center">
                        <UserAvatar size={40} user={user} />
                        <div style={{width: 400}}>
                            <UsernameInput initialValue={username}  />
                        </div>
                    </Space>
                </Header>
                <Layout style={{ width: "100%", alignSelf: 'center'}}>
                    <Content>
                        {/* <div>
                            <UserInfo user={user}/>
                            <Button>Show in Marketplace</Button>
                        </div> */}
                        {/* <div style={{height: 50}}><input /> </div> */}
                        <Flex justify="center" style={{padding: "15px 14%"}}>
                            <div className={style.items_container} style={{width: '100%'}}>
                                {wantlist?.wants?.map(el => <WantlistEntry key={el.id} entry={el} />)}
                            </div>
                        </Flex>
                    </Content>
                </Layout>

            </Layout>
        </>
    )
}

export default WantlistPage;