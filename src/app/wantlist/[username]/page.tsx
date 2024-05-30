import UserInfo from "@/app/components/user/UserInfo";
import WantlistEntry from "@/app/components/wantlist/WantlistEntry";
import UsernameInput from "@/app/components/user/UsernameInput";
import { Button, Flex, Layout, Tabs } from "antd";
import style from "./page.module.css"
import { Header, Content } from "antd/es/layout/layout";
import UserAvatar from "@/app/components/user/UserAvatar";
import CollectionPageHeader from "@/app/components/wantlist/CollectionPageHeader";
import CollectionPagination from "@/app/components/wantlist/CollectionPagination";
import { getWantlist } from "@/utils/requests/getWantlist";
import { getUser } from "@/utils/requests/getUser";
import CollectionControls from "@/app/components/wantlist/CollectionControls";
import CollectionTableFull from "@/app/components/wantlist/CollectionTableFull";
import CollectionTableMin from "@/app/components/wantlist/CollectionTableMin";

type Props = {
    params: { username: string }; 
    searchParams?: {
        page?: string;
        per_page?: string;
        sort?: string;
        sort_order?: string;
        layout?: string;
    }
}
  
const WantlistPage = async ({params, searchParams}: Props) => {
    const currentPage = Number(searchParams?.page) || 1;
    const perPage = Number(searchParams?.per_page) || 20;
    const sort = searchParams?.sort || "rating";
    const sort_order = searchParams?.sort_order || "desc";
    const layout = searchParams?.layout || "tiles";

    const { username } = params;

    const user = await getUser(username);
    const wantlist = await getWantlist(username, { page: currentPage, per_page: perPage, sort, sort_order })

    const isTiles = layout === "tiles";
    const isTableFull = layout === "table_full";
    const isTableMin = layout === "table_min"

    const isTable = isTableFull || isTableMin;

    return (
        <>
            <Layout style={{minHeight: "100vh"}}>
                <Header style={{display: "flex", justifyContent: "center"}}>
                    <CollectionPageHeader user={user}/>
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
                                    label: `Wantlist — ${user.num_wantlist} items`,
                                    key: "wantlist",
                                    children: <>
                                        <CollectionControls />
                                        {isTiles && 
                                            <Flex justify="center" className={style.container}>
                                                <div className={style.items_container} style={{width: '100%'}}>
                                                    {wantlist?.wants?.map(el => <WantlistEntry key={el.id} entry={el} />)}
                                                </div>
                                            </Flex>
                                        }
                                        {
                                            isTableFull &&
                                            <Flex justify="center" style={{padding: '15px 10px'}}>
                                                <CollectionTableFull data={wantlist?.wants} />
                                            </Flex>
                                                
                                        }
                                        {
                                            isTableMin &&
                                            <Flex justify="center" style={{padding: '15px 10px'}}>
                                                <CollectionTableMin data={wantlist?.wants} />
                                            </Flex>
                                        }
                                    </>,
                                },
                                // {
                                //     label: `Collection — ${user.num_collection} items`,
                                //     key: "collection",
                                //     children: "Empty"
                                // }
                            ]}
                        />
                        {/* <div>
                            <UserInfo user={user}/>
                            <Button>Show in Marketplace</Button>
                        </div> */}


                        {/* <CollectionControls />
                        {isTiles && <Flex justify="center" className={style.container}>
                            <div className={style.items_container} style={{width: '100%'}}>
                                {wantlist?.wants?.map(el => <WantlistEntry key={el.id} entry={el} />)}
                            </div>
                        </Flex>}
                        {
                            isTable && <CollectionTable data={wantlist?.wants} withImages={isTableFull} />
                        } */}
                        
                    </Content>
                    <CollectionPagination totalPages={wantlist?.pagination.items}
                        style={{textAlign: 'center', paddingBottom: 15}}
                    />
                </Layout>

            </Layout>
        </>
    )
}

export default WantlistPage;