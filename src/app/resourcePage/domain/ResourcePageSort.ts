import { UrlSearchParamGetResult } from "@/shared/types/infrastructure/UrlSearchParamGetResult";
import { validateItem } from "@/shared/utils/validateItem";

export const ResourcePageSort = {
    ratingDesc: "rating_desc",
    ratingAsc: "rating_asc"
} as const;

export type ResourcePageSort = typeof ResourcePageSort[keyof typeof ResourcePageSort];

export const defaultResourcePageSort = ResourcePageSort.ratingDesc;

export const validateResourcePageSort = (val: UrlSearchParamGetResult): ResourcePageSort => {
    return validateItem({
        valueToValidate: val,
        itemCollection: ResourcePageSort,
        defaultItem: defaultResourcePageSort
    })
}
