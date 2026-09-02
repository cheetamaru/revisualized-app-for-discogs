import { describe, expect, it } from "vitest";
import { ResourcePageSort } from "../domain/ResourcePageSort";
import { resourcePageSortAdapter } from "./resourcePageSortAdapter";

describe("resourcePageSortAdapter", () => {
    it.each([
        [ResourcePageSort.artistAsc, "artist", "asc"],
        [ResourcePageSort.artistDesc, "artist", "desc"],
        [ResourcePageSort.titleAsc, "title", "asc"],
        [ResourcePageSort.titleDesc, "title", "desc"],
        [ResourcePageSort.ratingAsc, "rating", "asc"],
        [ResourcePageSort.ratingDesc, "rating", "desc"],
        [ResourcePageSort.dateAddedAsc, "added", "asc"],
        [ResourcePageSort.dateAddedDesc, "added", "desc"],
        [ResourcePageSort.yearAsc, "year", "asc"],
        [ResourcePageSort.yearDesc, "year", "desc"],
    ] as const)("maps %s to Discogs parameters", (value, sort, sortOrder) => {
        expect(resourcePageSortAdapter.getApiSort(value)).toEqual({
            sort,
            sort_order: sortOrder,
        });
    });
});
