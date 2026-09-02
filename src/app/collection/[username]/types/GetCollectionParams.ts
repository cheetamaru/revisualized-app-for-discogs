import { ResourcePageSort } from "@/app/resourcePage/domain/ResourcePageSort";

export type GetCollectionParams = {
    page?: number;
    perPage?: number;
    sort?: ResourcePageSort;
};
