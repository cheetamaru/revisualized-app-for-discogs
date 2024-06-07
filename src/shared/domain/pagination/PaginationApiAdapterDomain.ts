import { DiscogsPaginationResponse } from "@/shared/types/discogs/pagination/DiscogsPaginationResponse"
import { PaginationInfo } from "@/shared/types/pagination/PaginationInfo"

const transformPaginationInfoFromApi = (pagination: DiscogsPaginationResponse["pagination"]): PaginationInfo => {
    return {
        page: pagination.page,
        perPage: pagination.per_page,
        itemsTotal: pagination.items,
        pagesTotal: pagination.pages,
    }
}

export const PaginationApiAdapterDomain = {
    transformPaginationInfoFromApi
}
