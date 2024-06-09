import { WantlistFormat } from "@lionralfs/discogs-client";

export type DiscogsEntryFormat = WantlistFormat & {
    text?: string;
};
