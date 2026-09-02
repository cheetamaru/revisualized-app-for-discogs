import { UrlSearchParamGetResult } from "@/shared/types/infrastructure/UrlSearchParamGetResult";
import { validateItem } from "@/shared/utils/validateItem";

export const ResourcePageSort = {
    artistAsc: "artist_asc",
    artistDesc: "artist_desc",
    titleAsc: "title_asc",
    titleDesc: "title_desc",
    ratingDesc: "rating_desc",
    ratingAsc: "rating_asc",
    dateAddedAsc: "added_asc",
    dateAddedDesc: "added_desc",
    yearAsc: "year_asc",
    yearDesc: "year_desc",
} as const;

export type ResourcePageSort = typeof ResourcePageSort[keyof typeof ResourcePageSort];

export const ResourcePageSortField = {
    artist: "artist",
    title: "title",
    rating: "rating",
    dateAdded: "added",
    year: "year",
} as const;

export type ResourcePageSortField = typeof ResourcePageSortField[keyof typeof ResourcePageSortField];
export type ResourcePageSortOrder = "asc" | "desc";

const sortByFieldAndOrder: Record<ResourcePageSortField, Record<ResourcePageSortOrder, ResourcePageSort>> = {
    [ResourcePageSortField.artist]: { asc: ResourcePageSort.artistAsc, desc: ResourcePageSort.artistDesc },
    [ResourcePageSortField.title]: { asc: ResourcePageSort.titleAsc, desc: ResourcePageSort.titleDesc },
    [ResourcePageSortField.rating]: { asc: ResourcePageSort.ratingAsc, desc: ResourcePageSort.ratingDesc },
    [ResourcePageSortField.dateAdded]: { asc: ResourcePageSort.dateAddedAsc, desc: ResourcePageSort.dateAddedDesc },
    [ResourcePageSortField.year]: { asc: ResourcePageSort.yearAsc, desc: ResourcePageSort.yearDesc },
};

const sortDetails = Object.entries(sortByFieldAndOrder).reduce((result, [field, orders]) => {
    result[orders.asc] = { field: field as ResourcePageSortField, order: "asc" };
    result[orders.desc] = { field: field as ResourcePageSortField, order: "desc" };
    return result;
}, {} as Record<ResourcePageSort, { field: ResourcePageSortField; order: ResourcePageSortOrder }>);

export const getResourcePageSortDetails = (sort: ResourcePageSort) => sortDetails[sort];

export const createResourcePageSort = (
    field: ResourcePageSortField,
    order: ResourcePageSortOrder,
) => sortByFieldAndOrder[field][order];

export const getDefaultResourcePageSortOrder = (
    field: ResourcePageSortField,
): ResourcePageSortOrder => {
    return field === ResourcePageSortField.artist || field === ResourcePageSortField.title
        ? "asc"
        : "desc";
};

export const getResourcePageSortOrderLabel = (
    field: ResourcePageSortField,
    order: ResourcePageSortOrder,
) => {
    if (field === ResourcePageSortField.artist || field === ResourcePageSortField.title) {
        return order === "asc" ? "A–Z" : "Z–A";
    }

    if (field === ResourcePageSortField.rating) {
        return order === "asc" ? "Lowest first" : "Highest first";
    }

    return order === "asc" ? "Oldest first" : "Newest first";
};

export const defaultResourcePageSort = ResourcePageSort.ratingDesc;

export const validateResourcePageSort = (val: UrlSearchParamGetResult): ResourcePageSort => {
    return validateItem({
        valueToValidate: val,
        itemCollection: ResourcePageSort,
        defaultItem: defaultResourcePageSort
    })
}
