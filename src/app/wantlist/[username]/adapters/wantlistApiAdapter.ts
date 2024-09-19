import { PaginationApiAdapterDomain } from "@/shared/domain/pagination/PaginationApiAdapterDomain";
import { WantlistApiAdapterDomain } from "../domain/WantlistApiAdapterDomain";
import wantlistApi from "../services/api/wantlistApi";
import { GetWantlistParams } from "../types/GetWantlistParams";
import { GetWantlistResponse } from "../types/GetWantlistResponse";

const { transformGetterParamsToApi, transformToWantlistEntry } = WantlistApiAdapterDomain;
const { transformPaginationInfoFromApi } = PaginationApiAdapterDomain;

const getWantlist = async (username: string, params: GetWantlistParams): Promise<Partial<GetWantlistResponse> & {error?: string}> => {
    const normalizedParams = transformGetterParamsToApi(params);

    try {
        const { pagination, wants } = await wantlistApi.getCachedWantlist(username, normalizedParams);

        return {
            pagination: transformPaginationInfoFromApi(pagination),
            entries: wants.map(transformToWantlistEntry),
        }
    } catch (e) {
        const error = e as { statusCode: number }

        return {
            error: "This is an error, " + error.statusCode 
        }
    }

};

const wantlistApiAdapter = {
    getWantlist,
}

export default wantlistApiAdapter;
