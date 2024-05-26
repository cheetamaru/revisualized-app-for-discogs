import { DiscogsUser } from "@/app/types/DiscogsUser"

/**
 * @deprecated
 */
export const getUserOnServer = async (username: string): Promise<DiscogsUser> => {
    const res = await fetch("http://localhost:3000/api/user/" + username, { cache: "force-cache" })

    const data = await res.json()

    return data
}