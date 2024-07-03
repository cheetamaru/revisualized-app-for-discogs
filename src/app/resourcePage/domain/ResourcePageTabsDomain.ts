import { ResourcePageTabKey, validateResourcePageTabKey } from "./ResourcePageTabKey"

const tabKeyRouteMapper = {
    [ResourcePageTabKey.wantlist]: "wantlist"
}

const getRouteByKey = (activeKey: string, username: string) => {
    const tabKey = validateResourcePageTabKey(activeKey)

    const route = tabKeyRouteMapper[tabKey]

    return `/${route}/${username}`
}

const getWantlistLabel = (total: number) => `Wantlist — ${total} items`;

export const ResourcePageTabsDomain = {
    getRouteByKey,
    getWantlistLabel,
};
