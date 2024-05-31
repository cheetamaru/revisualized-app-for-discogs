import { PaginationParameters } from "@lionralfs/discogs-client";

export type WantlistParams = PaginationParameters & {
    sort?: string;
    sort_order?: string;
}