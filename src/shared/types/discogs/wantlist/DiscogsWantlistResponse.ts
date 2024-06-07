import { DiscogsWantlistEntry } from "./DiscogsWantlistEntry";
import { DiscogsPaginationResponse } from "../pagination/DiscogsPaginationResponse";

export type DiscogsWantlistResponse = DiscogsPaginationResponse & {
    wants: DiscogsWantlistEntry[];
}
