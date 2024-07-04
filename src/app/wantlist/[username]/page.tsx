import wantlistApiAdapter from "./adapters/wantlistApiAdapter";
import { validateResourcePageSort } from "@/app/resourcePage/domain/ResourcePageSort";
import { validateResourcePageLayout } from "@/app/resourcePage/domain/ResourcePageLayout";
import { ResourcePageQueryParam } from "@/app/resourcePage/domain/ResourcePageQueryParam";
import { ResourcePagePaginationDomain } from "@/app/resourcePage/domain/ResourcePagePaginationDomain";
import ResourcePageLayout from "@/app/resourcePage/ui/layouts/ResourcePageLayout";
import WantlistEntries from "./ui/WantlistEntries";

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

    return (
        <ResourcePageLayout
            params={params}
            totalItems={wantlist?.pagination.itemsTotal}
        >
            <WantlistEntries
                layout={layout}
                entries={wantlist.entries}
            />
        </ResourcePageLayout>
    )
}

export default WantlistPage;