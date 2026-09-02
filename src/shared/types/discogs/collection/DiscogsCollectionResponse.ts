import { DiscogsPaginationResponse } from "../pagination/DiscogsPaginationResponse";
import { DiscogsCollectionEntry } from "./DiscogsCollectionEntry";

export type DiscogsCollectionResponse = DiscogsPaginationResponse & {
    releases: DiscogsCollectionEntry[];
};
