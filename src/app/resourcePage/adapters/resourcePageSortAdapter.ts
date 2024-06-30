import { SortOrder } from "@lionralfs/discogs-client"
import { ResourcePageSort, defaultResourcePageSort } from "../domain/ResourcePageSort";

type ApiSort = { sort: string, sort_order: SortOrder }

const sortMapper: Record<ResourcePageSort, ApiSort> = {
    [ResourcePageSort.ratingDesc]: {
        sort: "rating",
        sort_order: "desc"
    },
    [ResourcePageSort.ratingAsc]: {
        sort: "rating",
        sort_order: "asc"
    }
}

const getApiSort = (sort?: ResourcePageSort) => {
    return sortMapper[sort ?? defaultResourcePageSort]
}

export const resourcePageSortAdapter = {
    getApiSort,
}
