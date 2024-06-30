export const ResourcePageQueryParam = {
    sort: "sort",
    layout: "layout",
    page: "page",
    perPage: "per_page"
} as const;


export type ResourcePageQueryParam = typeof ResourcePageQueryParam[keyof typeof ResourcePageQueryParam];
