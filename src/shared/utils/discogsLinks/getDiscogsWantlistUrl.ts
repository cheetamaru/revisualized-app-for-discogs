import { UserProfile } from "@/app/user/types/UserProfile"

export const getDiscogsWantlistUrl = (user: UserProfile) => {
    const hostname = process.env.NEXT_PUBLIC_DISCOGS_HOSTNAME

    if (!hostname) {
        throw new Error("NEXT_PUBLIC_DISCOGS_HOSTNAME is not provided")
    }

    return `https://${hostname}/wantlist?user=${user.username}`
  }
