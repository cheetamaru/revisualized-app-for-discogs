import { UrlSearchParamGetResult } from "@/shared/types/infrastructure/UrlSearchParamGetResult";
import { validateItem } from "@/shared/utils/type/validateItem";

export const ResourcePageLayout = {
    tiles: "tiles",
    tableFull: "table_full",
    tableMin: "table_min"
} as const;

export type ResourcePageLayout = typeof ResourcePageLayout[keyof typeof ResourcePageLayout];

export const defaultResourcePageLayout = ResourcePageLayout.tiles;

export const validateResourcePageLayout = (val: UrlSearchParamGetResult): ResourcePageLayout => {
    return validateItem({
        itemCollection: ResourcePageLayout,
        valueToValidate: val,
        defaultItem: defaultResourcePageLayout
    })
}
