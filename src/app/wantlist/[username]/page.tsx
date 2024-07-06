import wantlistApiAdapter from "./adapters/wantlistApiAdapter";
import ResourcePageLayout from "@/app/resourcePage/ui/layouts/ResourcePageLayout";
import WantlistEntries from "./ui/WantlistEntries";
import { ResourcePageSearchParams } from "@/app/resourcePage/types/ResourcePageSearchParams";
import { getResourcePageParams } from "@/app/resourcePage/utils/getResourcePageParams";

type Props = {
    params: { username: string }; 
    searchParams?: ResourcePageSearchParams;
}
  
const WantlistPage = async ({params, searchParams}: Props) => {
    const {
        currentPage,
        perPage,
        sort,
        layout, 
    } = getResourcePageParams(searchParams)

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