import wantlistApiAdapter from "./adapters/wantlistApiAdapter";
import ResourcePageLayout from "@/app/resourcePage/ui/layouts/ResourcePageLayout";
import WantlistEntries from "./ui/WantlistEntries";
import { ResourcePageSearchParams } from "@/app/resourcePage/types/ResourcePageSearchParams";
import { getResourcePageParams } from "@/app/resourcePage/utils/getResourcePageParams";
import ErrorWithSearcher from "@/shared/ui/components/global/ErrorWithSearcher";

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

    if (wantlist.error) {
        return <ErrorWithSearcher message={wantlist.error} />
    }


    return (
        <ResourcePageLayout
            params={params}
            totalItems={wantlist?.pagination?.itemsTotal || 0}
        >
            <WantlistEntries
                layout={layout}
                entries={wantlist.entries || []}
            />
        </ResourcePageLayout>
    )
}

export default WantlistPage;