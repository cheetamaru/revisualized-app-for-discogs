import { SortOrder } from "@/shared/types/requestParams/SortOrder";

export type GetWantlistParams = {
    page?: number;
    perPage?: number;
    sort?: string;
    sortOrder?: SortOrder;
}
