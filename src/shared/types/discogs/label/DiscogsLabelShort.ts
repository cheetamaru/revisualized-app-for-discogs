import { LabelShort } from "@lionralfs/discogs-client";

export type DiscogsLabelShort = LabelShort & {
    entity_type_name: string;
};
