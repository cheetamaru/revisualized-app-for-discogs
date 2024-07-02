import { ResourcePageTabKey, validateResourcePageTabKey } from "./ResourcePageTabKey"

const tabKeyRouteMapper = {
    [ResourcePageTabKey.wantlist]: "wantlist"
}

const getRouteByKey = (activeKey: string, username: string) => {
    const tabKey = validateResourcePageTabKey(activeKey)

    const route = tabKeyRouteMapper[tabKey]

    return `/${route}/${username}`
}

export const ResourcePageTabsDomain = {
    getRouteByKey,
};
