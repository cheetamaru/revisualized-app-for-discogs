import { describe, expect, it, vi, beforeEach } from "vitest";

const api = vi.hoisted(() => ({ getCachedUserProfile: vi.fn(), getFreshUserProfile: vi.fn() }));
vi.mock("../services/api/userApi", () => ({ default: api }));
import userApiAdapter from "./userApiAdapter";

describe("resource profile freshness", () => {
    beforeEach(() => { vi.resetAllMocks(); });

    it.each([
        { num_collection: 0, num_wantlist: 0 },
        { num_collection: undefined, num_wantlist: 3 },
        { num_collection: 3, num_wantlist: undefined },
    ])("rechecks a cached profile before denying access", async (cached) => {
        api.getCachedUserProfile.mockResolvedValue(cached);
        api.getFreshUserProfile.mockResolvedValue({ num_collection: 5, num_wantlist: 3 });
        const result = await userApiAdapter.getUserProfileForResources("tester");
        expect(api.getFreshUserProfile).toHaveBeenCalledWith("tester");
        expect(result.collectionTotal).toBe(5);
        expect(result.wantlistTotal).toBe(3);
    });

    it("uses the cache when both lists are accessible and content exists", async () => {
        api.getCachedUserProfile.mockResolvedValue({ num_collection: 0, num_wantlist: 3 });
        await userApiAdapter.getUserProfileForResources("tester");
        expect(api.getFreshUserProfile).not.toHaveBeenCalled();
    });

    it("propagates a verification failure instead of reporting a private list", async () => {
        api.getCachedUserProfile.mockResolvedValue({});
        api.getFreshUserProfile.mockRejectedValue(new Error("Service unavailable"));
        await expect(userApiAdapter.getUserProfileForResources("tester"))
            .rejects.toThrow("Service unavailable");
    });
});
