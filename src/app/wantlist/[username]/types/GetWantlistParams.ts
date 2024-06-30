import { ResourcePageSort } from "@/app/resourcePage/domain/ResourcePageSort";

export type GetWantlistParams = {
    page?: number;
    perPage?: number;
    sort?: ResourcePageSort;
}
