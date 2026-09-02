import { ResourcePageTabKey, validateResourcePageTabKey } from "./ResourcePageTabKey"

const tabKeyRouteMapper = {
    [ResourcePageTabKey.wantlist]: "wantlist",
    [ResourcePageTabKey.collection]: "collection",
}

const getRouteByKey = (activeKey: string, username: string, searchParams = "") => {
    const tabKey = validateResourcePageTabKey(activeKey)

    const route = tabKeyRouteMapper[tabKey]

    const params = new URLSearchParams(searchParams)
    params.delete("page")
    const query = params.toString()

    return `/${route}/${encodeURIComponent(username)}${query ? `?${query}` : ""}`
}

const getWantlistLabel = (total: number) => `Wantlist — ${total} items`;
const getCollectionLabel = (total: number) => `Collection — ${total} items`;

export const ResourcePageTabsDomain = {
    getRouteByKey,
    getWantlistLabel,
    getCollectionLabel,
};
