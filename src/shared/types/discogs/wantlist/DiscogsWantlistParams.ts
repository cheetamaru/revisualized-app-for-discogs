import { PaginationParameters } from "@lionralfs/discogs-client";

export type DiscogsWantlistParams = PaginationParameters & {
    sort?: string;
    sort_order?: string;
}