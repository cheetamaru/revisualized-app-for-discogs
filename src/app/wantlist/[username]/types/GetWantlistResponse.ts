import { PaginationInfo } from "@/shared/types/pagination/PaginationInfo";
import { WantlistEntryType } from "./WantlistEntryType";

export type GetWantlistResponse = {
    pagination: PaginationInfo;
    entries: WantlistEntryType[];
}
