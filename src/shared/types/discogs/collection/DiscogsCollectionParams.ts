import { SortOrder } from "@/shared/types/requestParams/SortOrder";

export type DiscogsCollectionParams = {
    page?: number;
    per_page?: number;
    sort?: "rating";
    sort_order?: SortOrder;
};
