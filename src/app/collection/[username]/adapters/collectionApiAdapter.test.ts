import { beforeEach, describe, expect, it, vi } from "vitest";

const { getCachedCollection } = vi.hoisted(() => ({
    getCachedCollection: vi.fn(),
}));

vi.mock("../services/api/collectionApi", () => ({
    default: { getCachedCollection },
}));

import collectionApiAdapter from "./collectionApiAdapter";

describe("collectionApiAdapter", () => {
    beforeEach(() => {
        getCachedCollection.mockReset();
    });

    it("handles an empty public collection", async () => {
        getCachedCollection.mockResolvedValue({
            pagination: { page: 1, pages: 0, per_page: 20, items: 0, urls: {} },
            releases: [],
        });

        const result = await collectionApiAdapter.getCollection("empty-user", {});

        expect(result.error).toBeUndefined();
        expect(result.entries).toEqual([]);
    });

    it("returns an error for a private collection", async () => {
        getCachedCollection.mockRejectedValue(new Error("Collection is private"));

        const result = await collectionApiAdapter.getCollection("private-user", {});

        expect(result).toEqual({ error: "Collection is private" });
    });
});
