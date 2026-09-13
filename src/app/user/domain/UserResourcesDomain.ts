import { ResourcePageTabKey } from "@/app/resourcePage/domain/ResourcePageTabKey";
import { UserProfile } from "../types/UserProfile";

type ResourceTotals = Pick<UserProfile, "collectionTotal" | "wantlistTotal">;

const hasAccess = (total?: number) => typeof total === "number";
const hasContent = (total?: number) => typeof total === "number" && total > 0;

const hasCollectionAccess = ({ collectionTotal }: ResourceTotals) => hasAccess(collectionTotal);
const hasWantlistAccess = ({ wantlistTotal }: ResourceTotals) => hasAccess(wantlistTotal);

const hasAnyContent = ({ collectionTotal, wantlistTotal }: ResourceTotals) => (
    hasContent(collectionTotal) || hasContent(wantlistTotal)
);

const isResourceAvailable = (user: ResourceTotals, tabKey: ResourcePageTabKey) => (
    tabKey === ResourcePageTabKey.collection
        ? hasCollectionAccess(user)
        : hasWantlistAccess(user)
);

const getFallbackTabKey = (user: ResourceTotals, activeTabKey: ResourcePageTabKey) => {
    if (isResourceAvailable(user, activeTabKey)) return activeTabKey;

    const fallbackTabKey = activeTabKey === ResourcePageTabKey.collection
        ? ResourcePageTabKey.wantlist
        : ResourcePageTabKey.collection;

    return isResourceAvailable(user, fallbackTabKey) ? fallbackTabKey : undefined;
};

export const UserResourcesDomain = {
    getFallbackTabKey,
    hasAnyContent,
    hasCollectionAccess,
    hasWantlistAccess,
    isResourceAvailable,
};
