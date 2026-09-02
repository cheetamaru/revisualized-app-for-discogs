import { PaginationApiAdapterDomain } from "@/shared/domain/pagination/PaginationApiAdapterDomain";
import { CollectionApiAdapterDomain } from "../domain/CollectionApiAdapterDomain";
import collectionApi from "../services/api/collectionApi";
import { GetCollectionParams } from "../types/GetCollectionParams";
import { GetCollectionResponse } from "../types/GetCollectionResponse";

const { transformPaginationInfoFromApi } = PaginationApiAdapterDomain;
const { transformGetterParamsToApi, transformToCollectionEntry } = CollectionApiAdapterDomain;

const getCollection = async (
    username: string,
    params: GetCollectionParams,
): Promise<Partial<GetCollectionResponse> & { error?: string }> => {
    const normalizedParams = transformGetterParamsToApi(params);

    try {
        const { pagination, releases } = await collectionApi.getCachedCollection(username, normalizedParams);

        return {
            pagination: transformPaginationInfoFromApi(pagination),
            entries: releases.map(transformToCollectionEntry),
        };
    } catch (error) {
        return { error: error instanceof Error ? error.message : "Failed to load collection" };
    }
};

const collectionApiAdapter = { getCollection };

export default collectionApiAdapter;
