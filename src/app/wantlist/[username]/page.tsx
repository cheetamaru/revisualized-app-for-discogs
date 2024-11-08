import { ResourcePageSearchParams } from "@/app/resourcePage/types/ResourcePageSearchParams";
import { getResourcePageParams } from "@/app/resourcePage/utils/getResourcePageParams";
import { Suspense } from "react";
import WantlistPageWrapper from "./ui/WantlistPageWrapper";
import WantlistPageWrapperLoading from "./ui/WantlistPageWrapperLoading";

type Props = {
    params: { username: string }; 
    searchParams?: ResourcePageSearchParams;
}

const getSuspenseKey = (
    ...args: string[]
) => {
    return args.join("|")
}
  
const WantlistPage = async ({params, searchParams}: Props) => {
    const {
        currentPage,
        perPage,
        sort,
        layout, 
    } = getResourcePageParams(searchParams)

    const suspenseKey = getSuspenseKey(
        currentPage.toString(),
        perPage.toString(),
        sort.toString(),
        layout.toString()
    )

    return (
        // <Suspense
        //     key={suspenseKey}
        //     fallback={
        //         <WantlistPageWrapperLoading
        //             params={params}
        //             layout={layout}
        //         />
        //     }
        // >
            <WantlistPageWrapper
                params={params}
                searchParams={searchParams}
            />
        // </Suspense>
    )
}

export default WantlistPage;