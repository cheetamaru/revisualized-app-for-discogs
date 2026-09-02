import { unstable_cache } from "next/cache";
import apiAdapter from "@/shared/adapters/api/apiAdapter";
import { DiscogsCollectionParams } from "@/shared/types/discogs/collection/DiscogsCollectionParams";
import { DiscogsCollectionResponse } from "@/shared/types/discogs/collection/DiscogsCollectionResponse";
import { CollectionApiDomain } from "../../domain/CollectionApiDomain";

const { getterCacheKey, getterRevalidateTimeout } = CollectionApiDomain;

const getCachedCollection = unstable_cache(
    async (username: string, params?: DiscogsCollectionParams): Promise<DiscogsCollectionResponse> => {
        const collection = await apiAdapter.getCollection(username, params);
        return collection as DiscogsCollectionResponse;
    },
    [getterCacheKey],
    { revalidate: getterRevalidateTimeout },
);

const collectionApi = { getCachedCollection };

export default collectionApi;
