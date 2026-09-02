import { describe, expect, it } from "vitest";
import { ResourcePageTabKey } from "./ResourcePageTabKey";
import { ResourcePageTabsDomain } from "./ResourcePageTabsDomain";

describe("ResourcePageTabsDomain", () => {
    it("preserves view settings and resets the page when switching tabs", () => {
        const route = ResourcePageTabsDomain.getRouteByKey(
            ResourcePageTabKey.wantlist,
            "user name",
            "page=4&per_page=50&sort=rating_asc&layout=table_min",
        );

        expect(route).toBe("/wantlist/user%20name?per_page=50&sort=rating_asc&layout=table_min");
    });

    it("uses collection when an unknown tab key is received", () => {
        expect(ResourcePageTabsDomain.getRouteByKey("unknown", "tester"))
            .toBe("/collection/tester");
    });
});
