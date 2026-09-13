import { describe, expect, it } from "vitest";
import { ResourcePageTabKey } from "@/app/resourcePage/domain/ResourcePageTabKey";
import { UserResourcesDomain } from "./UserResourcesDomain";

describe("UserResourcesDomain", () => {
    it("distinguishes a private resource from an accessible empty resource", () => {
        expect(UserResourcesDomain.hasCollectionAccess({ collectionTotal: undefined })).toBe(false);
        expect(UserResourcesDomain.hasCollectionAccess({ collectionTotal: 0 })).toBe(true);
    });

    it.each([
        [{ collectionTotal: undefined, wantlistTotal: undefined }, false],
        [{ collectionTotal: 0, wantlistTotal: 0 }, false],
        [{ collectionTotal: undefined, wantlistTotal: 0 }, false],
        [{ collectionTotal: 1, wantlistTotal: undefined }, true],
        [{ collectionTotal: 0, wantlistTotal: 1 }, true],
    ] as const)("detects whether the user has content", (totals, expected) => {
        expect(UserResourcesDomain.hasAnyContent(totals)).toBe(expected);
    });

    it("selects the wantlist when the collection is private", () => {
        expect(UserResourcesDomain.getFallbackTabKey(
            { collectionTotal: undefined, wantlistTotal: 3 },
            ResourcePageTabKey.collection,
        )).toBe(ResourcePageTabKey.wantlist);
    });

    it("keeps an accessible empty active resource when the other list has content", () => {
        expect(UserResourcesDomain.getFallbackTabKey(
            { collectionTotal: 0, wantlistTotal: 3 },
            ResourcePageTabKey.collection,
        )).toBe(ResourcePageTabKey.collection);
    });
});
