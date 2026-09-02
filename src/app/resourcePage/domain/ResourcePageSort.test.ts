import { describe, expect, it } from "vitest";
import {
    createResourcePageSort,
    getDefaultResourcePageSortOrder,
    getResourcePageSortDetails,
    getResourcePageSortOrderLabel,
    ResourcePageSort,
    ResourcePageSortField,
} from "./ResourcePageSort";

describe("ResourcePageSort controls", () => {
    it.each([
        [ResourcePageSortField.artist, "asc"],
        [ResourcePageSortField.title, "asc"],
        [ResourcePageSortField.rating, "desc"],
        [ResourcePageSortField.dateAdded, "desc"],
        [ResourcePageSortField.year, "desc"],
    ] as const)("provides the natural default direction for %s", (field, order) => {
        expect(getDefaultResourcePageSortOrder(field)).toBe(order);
    });

    it("changes the direction without changing field", () => {
        const current = getResourcePageSortDetails(ResourcePageSort.dateAddedDesc);

        expect(createResourcePageSort(current.field, "asc"))
            .toBe(ResourcePageSort.dateAddedAsc);
    });

    it.each([
        [ResourcePageSortField.artist, "asc", "A–Z"],
        [ResourcePageSortField.title, "desc", "Z–A"],
        [ResourcePageSortField.rating, "desc", "Highest first"],
        [ResourcePageSortField.dateAdded, "asc", "Oldest first"],
        [ResourcePageSortField.year, "desc", "Newest first"],
    ] as const)("provides a contextual label for %s %s", (field, order, label) => {
        expect(getResourcePageSortOrderLabel(field, order)).toBe(label);
    });
});
