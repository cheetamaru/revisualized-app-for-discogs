import { DiscogsProfile } from "@/shared/types/discogs/profile/DiscogsProfile"
import { UserProfile } from "../types/UserProfile"

const transformToUserProfile = (profile: DiscogsProfile): UserProfile => {
    return {
        id: profile.id,
        uri: profile.uri,
        username: profile.username,
        avatarUrl: profile.avatar_url,
        bannerUrl: profile.banner_url,
        collectionTotal: profile.num_collection,
        wantlistTotal: profile.num_wantlist,
    }
}

export const UserApiAdapterDomain = {
    transformToUserProfile,
}