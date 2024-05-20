import { DiscogsWantlistResponse } from "@/app/types/DiscogsWantlistResponse"

export const getWantlistOnServer = async (username: string): Promise<DiscogsWantlistResponse> => {
    const res = await fetch("http://localhost:3000/api/wantlist/" + username, { cache: "no-store" })

    const data = await res.json()

    return data
}