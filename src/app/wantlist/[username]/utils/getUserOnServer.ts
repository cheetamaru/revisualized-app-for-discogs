import { DiscogsProfile } from "@/shared/types/discogs/profile/DiscogsProfile"

/**
 * @deprecated
 */
export const getUserOnServer = async (username: string): Promise<DiscogsProfile> => {
    const res = await fetch("http://localhost:3000/api/user/" + username, { cache: "force-cache" })

    const data = await res.json()

    return data
}