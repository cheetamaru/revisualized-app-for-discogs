import { ResourcePageSearchParams } from "@/app/resourcePage/types/ResourcePageSearchParams";
import WantlistPageWrapper from "./ui/WantlistPageWrapper";

type Props = {
    params: { username: string }; 
    searchParams?: ResourcePageSearchParams;
}
  
const WantlistPage = async ({params, searchParams}: Props) => {
    return (
        <WantlistPageWrapper
            params={params}
            searchParams={searchParams}
        />
    )
}

export default WantlistPage;
