import { ResourcePageSearchParams } from "@/app/resourcePage/types/ResourcePageSearchParams";
import { getResourcePageParams } from "@/app/resourcePage/utils/getResourcePageParams";
import { Suspense } from "react";
import WantlistPageWrapper from "./ui/WantlistPageWrapper";
import ResourcePageLayout from "@/app/resourcePage/ui/layouts/ResourcePageLayout";

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

    const suspenseKey = currentPage.toString() + perPage.toString() + sort.toString() + layout.toString()


    return (
        <Suspense
            key={suspenseKey}
            fallback={
                <ResourcePageLayout
                    params={params}
                    totalItems={0}
                >
                    Loading
                </ResourcePageLayout>
            }
        >
            <WantlistPageWrapper params={params} searchParams={searchParams} />
        </Suspense>
    )
}

export default WantlistPage;