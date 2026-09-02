import { SortOrder } from "@/shared/types/requestParams/SortOrder";
import { ResourceApiSort } from "@/shared/types/requestParams/ResourceApiSort";

export type DiscogsCollectionParams = {
    page?: number;
    per_page?: number;
    sort?: ResourceApiSort;
    sort_order?: SortOrder;
};
