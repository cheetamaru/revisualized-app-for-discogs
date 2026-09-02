import { BasicReleaseInfo, GetReleasesResponse } from "@lionralfs/discogs-client";
import { DiscogsArtistShort } from "../artist/DiscogsArtistShort";
import { DiscogsEntryFormat } from "../format/DiscogsEntryFormat";
import { DiscogsLabelShort } from "../label/DiscogsLabelShort";

type CollectionRelease = GetReleasesResponse["releases"][number];

export type DiscogsCollectionEntry = CollectionRelease & {
    basic_information: BasicReleaseInfo & {
        artists: DiscogsArtistShort[];
        formats: DiscogsEntryFormat[];
        labels: DiscogsLabelShort[];
    };
};
