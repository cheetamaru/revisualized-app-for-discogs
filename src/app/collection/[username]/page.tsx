import { ResourcePageSearchParams } from "@/app/resourcePage/types/ResourcePageSearchParams";
import CollectionPageWrapper from "./ui/CollectionPageWrapper";

type Props = {
    params: { username: string };
    searchParams?: ResourcePageSearchParams;
};

const CollectionPage = ({ params, searchParams }: Props) => (
    <CollectionPageWrapper params={params} searchParams={searchParams} />
);

export default CollectionPage;
