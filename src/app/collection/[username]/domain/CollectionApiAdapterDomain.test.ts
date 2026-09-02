import { describe, expect, it } from "vitest";
import { DiscogsCollectionEntry } from "@/shared/types/discogs/collection/DiscogsCollectionEntry";
import { CollectionApiAdapterDomain } from "./CollectionApiAdapterDomain";

const makeEntry = (instanceId: number, overrides = {}) => ({
    id: 10,
    instance_id: instanceId,
    folder_id: 0,
    rating: 4,
    notes: [],
    basic_information: {
        id: 10,
        title: "Release",
        year: 2000,
        resource_url: "",
        thumb: "",
        cover_image: "",
        formats: [],
        labels: [],
        artists: [],
        genres: [],
        styles: [],
        ...overrides,
    },
}) as unknown as DiscogsCollectionEntry;

describe("CollectionApiAdapterDomain", () => {
    it("provides safe fallbacks for incomplete release metadata", () => {
        const result = CollectionApiAdapterDomain.transformToCollectionEntry(makeEntry(1));

        expect(result.mainFormatName).toBe("Unknown");
        expect(result.mainLabelName).toBe("Unknown");
        expect(result.mainArtistName).toBe("Unknown Artist");
        expect(result.mainFormat.quantity).toBe(1);
    });

    it("generates a unique key for separate instances of one release", () => {
        const first = CollectionApiAdapterDomain.transformToCollectionEntry(makeEntry(1));
        const second = CollectionApiAdapterDomain.transformToCollectionEntry(makeEntry(2));

        expect(first.resourceKey).not.toBe(second.resourceKey);
    });
});
