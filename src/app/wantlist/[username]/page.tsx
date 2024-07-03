import { Flex } from "antd";
import style from "./page.module.css"
import ResourcePagePagination from "@/app/resourcePage/ui/components/ResourcePagePagination";
import ResourceTableMin from "@/app/resource/ui/components/ResourceTableMin";
import wantlistApiAdapter from "./adapters/wantlistApiAdapter";
import ResourceEntryCard from "@/app/resource/ui/components/ResourceEntryCard";
import ResourceTableFull from "@/app/resource/ui/components/ResourceTableFull";
import { validateResourcePageSort } from "@/app/resourcePage/domain/ResourcePageSort";
import { validateResourcePageLayout } from "@/app/resourcePage/domain/ResourcePageLayout";
import { ResourcePageQueryParam } from "@/app/resourcePage/domain/ResourcePageQueryParam";
import { ResourcePagePaginationDomain } from "@/app/resourcePage/domain/ResourcePagePaginationDomain";
import ResourcePageLayout from "@/app/resourcePage/ui/layouts/ResourcePageLayout";

const {
    validateCurrentPage,
    validatePerPage,
} = ResourcePagePaginationDomain;

type Props = {
    params: { username: string }; 
    searchParams?: {
        page?: string;
        per_page?: string;
        sort?: string;
        layout?: string;
    }
}
  
const WantlistPage = async ({params, searchParams}: Props) => {
    const currentPage = validateCurrentPage(searchParams?.[ResourcePageQueryParam.page]);
    const perPage = validatePerPage(searchParams?.[ResourcePageQueryParam.perPage]);

    const sort = validateResourcePageSort(searchParams?.[ResourcePageQueryParam.sort]);
    const layout = validateResourcePageLayout(searchParams?.[ResourcePageQueryParam.layout]);

    const { username } = params;

    const wantlist = await wantlistApiAdapter.getWantlist(
        username,
        {
            page: currentPage,
            perPage: perPage,
            sort,
        })

    const isTiles = layout === "tiles";
    const isTableFull = layout === "table_full";
    const isTableMin = layout === "table_min"

    return (
        <ResourcePageLayout params={params}>
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
                    <ResourceTableFull data={wantlist?.entries} />
                </Flex>
                    
            }
            {
                isTableMin &&
                <Flex justify="center" style={{padding: '15px 10px'}}>
                    <ResourceTableMin data={wantlist?.entries} />
                </Flex>
            }
            <ResourcePagePagination
                totalPages={wantlist?.pagination.itemsTotal}
                style={{textAlign: 'center', paddingBottom: 15}}
            />    
        </ResourcePageLayout>
    )
}

export default WantlistPage;