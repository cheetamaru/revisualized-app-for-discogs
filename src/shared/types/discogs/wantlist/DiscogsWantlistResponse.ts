import { PaginationResponse } from "@lionralfs/discogs-client";
import { DiscogsWantlistEntry } from "./DiscogsWantlistEntry";

export type DiscogsWantlistResponse = PaginationResponse & {
    wants: DiscogsWantlistEntry[];
}
