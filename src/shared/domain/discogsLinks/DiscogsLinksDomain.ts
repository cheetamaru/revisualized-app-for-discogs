import { UserProfile } from "@/app/user/types/UserProfile"

const getHostname = () => {
    const hostname = process.env.NEXT_PUBLIC_DISCOGS_HOSTNAME

    if (!hostname) {
        throw new Error("NEXT_PUBLIC_DISCOGS_HOSTNAME is not provided")
    }

    return hostname
}

const getEntrySrc = (id: string | number) => {
    const hostname = getHostname()

    return `https://${hostname}/release/${id}`;
}

const getWantlistUrl = (user: UserProfile) => {
    const hostname = getHostname()

    return `https://${hostname}/wantlist?user=${user.username}`
}

const getCollectionUrl = (user: UserProfile) => {
    const hostname = getHostname()

    return `https://${hostname}/user/${encodeURIComponent(user.username)}/collection`
}

export const DiscogsLisnksDomain = {
    getEntrySrc,
    getWantlistUrl,
    getCollectionUrl,
}
