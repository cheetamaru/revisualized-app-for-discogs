import { UrlSearchParamGetResult } from "@/shared/types/infrastructure/UrlSearchParamGetResult";
import { validateItem } from "@/shared/utils/validateItem";

export const ResourcePageTabKey = {
    wantlist: "wantlist",
} as const;


export type ResourcePageTabKey = typeof ResourcePageTabKey[keyof typeof ResourcePageTabKey];

export const defaultResourcePageTabKey = ResourcePageTabKey.wantlist;

export const validateResourcePageTabKey = (val: UrlSearchParamGetResult): ResourcePageTabKey => {
    return validateItem({
        itemCollection: ResourcePageTabKey,
        valueToValidate: val,
        defaultItem: defaultResourcePageTabKey
    })
}
