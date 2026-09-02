import { getResourcePageParams } from "@/app/resourcePage/utils/getResourcePageParams";
import { ResourcePageSearchParams } from "@/app/resourcePage/types/ResourcePageSearchParams";
import ErrorWithSearcher from "@/shared/ui/components/global/ErrorWithSearcher";
import ResourceEntries from "@/app/resource/ui/components/ResourceEntries";
import collectionApiAdapter from "../adapters/collectionApiAdapter";

type Props = {
    params: { username: string };
    searchParams?: ResourcePageSearchParams;
};

const CollectionEntriesWrapper = async ({ params, searchParams }: Props) => {
    const { currentPage, perPage, sort, layout } = getResourcePageParams(searchParams);
    const collection = await collectionApiAdapter.getCollection(params.username, {
        page: currentPage,
        perPage,
        sort,
    });

    if (collection.error) {
        return <ErrorWithSearcher message={collection.error} />;
    }

    return <ResourceEntries layout={layout} entries={collection.entries || []} />;
};

export default CollectionEntriesWrapper;
