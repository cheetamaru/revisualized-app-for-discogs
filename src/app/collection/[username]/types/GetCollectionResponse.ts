import { PaginationInfo } from "@/shared/types/pagination/PaginationInfo";
import { CollectionEntryType } from "./CollectionEntryType";

export type GetCollectionResponse = {
    pagination: PaginationInfo;
    entries: CollectionEntryType[];
};
