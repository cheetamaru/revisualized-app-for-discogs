export const ResourcePageLayout = {
    tiles: "tiles",
    tableFull: "table_full",
    tableMin: "table_min"
} as const;

export type ResourcePageLayout = typeof ResourcePageLayout[keyof typeof ResourcePageLayout];

export const defaultResourcePageLayout = ResourcePageLayout.tiles;

export const validateResourcePageLayout = (val: string): ResourcePageLayout => {
    const values = Object.values(ResourcePageLayout);
    const valueToCheck = val as ResourcePageLayout

    if (values.includes(valueToCheck)) {
        return valueToCheck;
    }

    return defaultResourcePageLayout;
}
