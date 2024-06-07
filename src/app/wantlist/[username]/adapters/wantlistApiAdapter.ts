import { PaginationApiAdapterDomain } from "@/shared/domain/pagination/PaginationApiAdapterDomain";
import { WantlistApiAdapterDomain } from "../domain/WantlistApiAdapterDomain";
import wantlistApi from "../services/api/wantlistApi";
import { GetWantlistParams } from "../types/GetWantlistParams";
import { GetWantlistResponse } from "../types/GetWantlistResponse";

const { transformGetterParamsToApi, transformToWantlistEntry } = WantlistApiAdapterDomain;
const { transformPaginationInfoFromApi } = PaginationApiAdapterDomain;

const getWantlist = async (username: string, params: GetWantlistParams): Promise<GetWantlistResponse> => {
    const normalizedParams = transformGetterParamsToApi(params);

    const { pagination, wants } = await wantlistApi.getCachedWantlist(username, normalizedParams);

    return {
        pagination: transformPaginationInfoFromApi(pagination),
        entries: wants.map(transformToWantlistEntry),
    }
};

export default {
    getWantlist,
};
