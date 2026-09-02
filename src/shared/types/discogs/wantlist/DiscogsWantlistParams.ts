import { PaginationParameters } from "@lionralfs/discogs-client";
import { ResourceApiSort } from "@/shared/types/requestParams/ResourceApiSort";
import { SortOrder } from "@/shared/types/requestParams/SortOrder";

export type DiscogsWantlistParams = PaginationParameters & {
    sort?: ResourceApiSort;
    sort_order?: SortOrder;
}
