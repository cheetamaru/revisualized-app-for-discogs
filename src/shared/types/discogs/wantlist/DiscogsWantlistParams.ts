import { PaginationParameters, SortOrder } from "@lionralfs/discogs-client";

export type DiscogsWantlistParams = PaginationParameters & {
    sort?: string;
    sort_order?: SortOrder;
}