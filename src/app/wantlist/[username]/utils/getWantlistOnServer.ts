import { DiscogsWantlistResponse } from "@/app/types/DiscogsWantlistResponse"

/**
 * @deprecated
 */
export const getWantlistOnServer = async (username: string): Promise<DiscogsWantlistResponse> => {
    const res = await fetch("http://localhost:3000/api/wantlist/" + username, { cache: "force-cache" })

    const data = await res.json()

    return data
}