import { Flex, Layout, Tabs } from "antd";
import style from "./page.module.css"
import { Header, Content } from "antd/es/layout/layout";
import ResourcePageHeader from "@/app/resourcePage/ui/components/ResourcePageHeader";
import CollectionPagination from "@/app/components/wantlist/CollectionPagination";
import CollectionControls from "@/app/components/wantlist/CollectionControls";
import CollectionTableFull from "@/app/components/wantlist/CollectionTableFull";
import CollectionTableMin from "@/app/components/wantlist/CollectionTableMin";
import userApiAdapter from "@/app/user/adapters/userApiAdapter";
import wantlistApiAdapter from "./adapters/wantlistApiAdapter";
import { SortOrder } from "@/shared/types/requestParams/SortOrder";
import ResourceEntryCard from "@/app/resource/ui/components/ResourceEntryCard";

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

const sortOrderOptions = ["asc", "desc"]

const parseSortOrder = (payload?: string, defaultValue: SortOrder = "desc"): SortOrder => {
    if (!payload || !sortOrderOptions.includes(payload)) {
        return defaultValue
    }

    return payload as SortOrder;
}
  
const WantlistPage = async ({params, searchParams}: Props) => {
    const currentPage = Number(searchParams?.page) || 1;
    const perPage = Number(searchParams?.per_page) || 20;
    const sort = searchParams?.sort || "rating";
    const sortOrder = parseSortOrder(searchParams?.sort_order);
    const layout = searchParams?.layout || "tiles";

    const { username } = params;

    const user = await userApiAdapter.getUserProfile(username);
    const wantlist = await wantlistApiAdapter.getWantlist(
        username,
        {
            page: currentPage,
            perPage: perPage,
            sort,
            sortOrder
        })

    const isTiles = layout === "tiles";
    const isTableFull = layout === "table_full";
    const isTableMin = layout === "table_min"

    const isTable = isTableFull || isTableMin;

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
                                        <CollectionControls />
                                        {isTiles && 
                                            <Flex justify="center" className={style.container}>
                                                <div className={style.items_container} style={{width: '100%'}}>
                                                    {wantlist?.entries?.map(el => <ResourceEntryCard key={el.resourceId} entry={el} />)}
                                                </div>
                                            </Flex>
                                        }
                                        {
                                            isTableFull &&
                                            <Flex justify="center" style={{padding: '15px 10px'}}>
                                                <CollectionTableFull data={wantlist?.entries} />
                                            </Flex>
                                                
                                        }
                                        {
                                            isTableMin &&
                                            <Flex justify="center" style={{padding: '15px 10px'}}>
                                                <CollectionTableMin data={wantlist?.entries} />
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

                    </Content>
                    <CollectionPagination totalPages={wantlist?.pagination.itemsTotal}
                        style={{textAlign: 'center', paddingBottom: 15}}
                    />
                </Layout>
            </Layout>
        </>
    )
}

export default WantlistPage;