import { WantlistEntryResponse } from "@lionralfs/discogs-client";
import { DiscogsLabelShort } from "../label/DiscogsLabelShort";

export type DiscogsWantlistEntry = WantlistEntryResponse & {
    basic_information: WantlistEntryResponse["basic_information"] & {
        genres: string[];
        styles: string[];
        labels: DiscogsLabelShort[],
    }
}
