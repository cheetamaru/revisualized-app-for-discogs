import { DiscogsUser } from "@/app/types/DiscogsUser";
import { Button, Card, Divider, Flex, Layout, Space, Statistic } from "antd";
import Sider from "antd/es/layout/Sider";
import DiscogsLogo from "../discogs/DiscogsLogo";
import UserAvatar from "./UserAvatar";
import Title from "antd/es/typography/Title";

type Props = {
    user: DiscogsUser
}

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: "black",
    padding: 10,
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
  };

const UserInfo = ({user}: Props) => {
    const cardStyle = {
        width: 400,
        backgroundImage: 'url('+user.banner_url+')' 
     }
    return (
        <>
            <Card style={cardStyle}>
                <Layout style={layoutStyle} hasSider>
                    <Sider width={140} style={siderStyle}>
                        <Flex style={{height: '100%'}} justify="center" align="center">
                            <UserAvatar size={110} user={user} />
                        </Flex>
                    </Sider>
                    <Layout>
                        <Title level={4} style={{paddingLeft: 10, paddingTop: 10, marginBottom: 0}} ellipsis title={user?.username}>{ user?.username }</Title>
                        <Space style={{padding: 10}}>
                            <Statistic title="Collection" value={user.num_collection} />
                            <Divider type="vertical"/>
                            <Statistic title="Wantlist" value={user.num_wantlist} />
                        </Space>
     
                        <Button
                            type="link"
                            href={user?.uri} 
                            target="_blank"
                            icon={<DiscogsLogo size={14} />}
                            style={{ alignSelf: "flex-end", display: "flex", alignItems: "baseline"}}
                            iconPosition="end"
                            
                        >Go to Profile</Button>
                    </Layout>
                </Layout>
            </Card>
        </>
    )
}

export default UserInfo;