import { SortOrder } from "@lionralfs/discogs-client"
import { ResourcePageSort, defaultResourcePageSort } from "../domain/ResourcePageSort";
import { ResourceApiSort } from "@/shared/types/requestParams/ResourceApiSort";

type ApiSort = { sort: ResourceApiSort, sort_order: SortOrder }

const sortMapper: Record<ResourcePageSort, ApiSort> = {
    [ResourcePageSort.artistAsc]: { sort: "artist", sort_order: "asc" },
    [ResourcePageSort.artistDesc]: { sort: "artist", sort_order: "desc" },
    [ResourcePageSort.titleAsc]: { sort: "title", sort_order: "asc" },
    [ResourcePageSort.titleDesc]: { sort: "title", sort_order: "desc" },
    [ResourcePageSort.ratingDesc]: {
        sort: "rating",
        sort_order: "desc"
    },
    [ResourcePageSort.ratingAsc]: {
        sort: "rating",
        sort_order: "asc"
    },
    [ResourcePageSort.dateAddedAsc]: { sort: "added", sort_order: "asc" },
    [ResourcePageSort.dateAddedDesc]: { sort: "added", sort_order: "desc" },
    [ResourcePageSort.yearAsc]: { sort: "year", sort_order: "asc" },
    [ResourcePageSort.yearDesc]: { sort: "year", sort_order: "desc" },
}

const getApiSort = (sort?: ResourcePageSort) => {
    return sortMapper[sort ?? defaultResourcePageSort]
}

export const resourcePageSortAdapter = {
    getApiSort,
}
