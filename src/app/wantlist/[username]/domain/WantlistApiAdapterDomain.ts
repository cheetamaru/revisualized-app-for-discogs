import { DiscogsWantlistParams } from "@/shared/types/discogs/wantlist/DiscogsWantlistParams"
import { GetWantlistParams } from "../types/GetWantlistParams"
import { DiscogsWantlistEntry } from "@/shared/types/discogs/wantlist/DiscogsWantlistEntry"
import { WantlistEntryType } from "../types/WantlistEntryType"

const transformGetterParamsToApi = (params: GetWantlistParams): DiscogsWantlistParams => {
    return {
        page: params.page,
        per_page: params.perPage,
        sort: params.sort,
        sort_order: params.sortOrder
    }
}

const transformToWantlistEntry = (entry: DiscogsWantlistEntry): WantlistEntryType => {
    return {
        resourceId: entry.basic_information.id,
        rating: entry.rating,
    }
}

export const WantlistApiAdapterDomain = {
    transformGetterParamsToApi,
    transformToWantlistEntry
}