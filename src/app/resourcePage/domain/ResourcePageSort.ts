import { validateItem } from "@/shared/utils/type/validateItem";

export const ResourcePageSort = {
    ratingDesc: "rating_desc",
    ratingAsc: "rating_asc"
} as const;


export type ResourcePageSort = typeof ResourcePageSort[keyof typeof ResourcePageSort];

export const defaultResourcePageSort = ResourcePageSort.ratingDesc;

export const validateResourcePageSort = (val: string): ResourcePageSort => {
    return validateItem({
        valueToValidate: val,
        itemCollection: ResourcePageSort,
        defaultItem: defaultResourcePageSort
    })
}
