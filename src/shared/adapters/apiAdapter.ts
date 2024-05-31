import apiClient from "@/shared/services/api/apiClient"
import { DiscogsWantlistParams } from "@/shared/types/discogs/wantlist/DiscogsWantlistParams"

export const getApiAdapter = () => {
    const getUserProfile = (username: string) => {
        return apiClient.user().getProfile(username)
    }

    const getWantlist = (username: string, params?: DiscogsWantlistParams) => {
        return apiClient.user().wantlist().getReleases(username, params)
    }

    return {
        getUserProfile,
        getWantlist,
    }
}