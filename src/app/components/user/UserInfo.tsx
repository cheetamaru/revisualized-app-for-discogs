import { DiscogsUser } from "@/app/types/DiscogsUser";
import { Avatar, Button, Card, Layout, Space, Statistic } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";

type Props = {
    user: DiscogsUser
}

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    // lineHeight: '120px',
    color: '#fff',
    backgroundColor: "black",
    padding: 10,
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    // width: 'calc(50% - 8px)',
    // maxWidth: 'calc(50% - 8px)',
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
                    <Sider width={120} style={siderStyle}>
                        <Avatar size={100} icon={<Image src={user?.avatar_url} width={100} height={100} alt={user?.username} />} />
                        
                        <div>{ user?.username }</div>
                    </Sider>
                    <Layout>
                        <Space style={{padding: 10}}>
                            <Statistic title="Collection" value={user.num_collection} />
                            <Statistic title="Wantlist" value={user.num_wantlist} />
                        </Space>
                        <Button type="link" href={user?.uri} target="_blank">Go to Discogs Profile</Button>
                    </Layout>
                </Layout>
            </Card>
        </>
    )
}

export default UserInfo;