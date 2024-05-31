import apiClient from "@/shared/services/api/apiClient"
import { DiscogsWantlistParams } from "@/shared/types/discogs/wantlist/DiscogsWantlistParams"
import { stripRateLimit } from "../services/requests/stripRateLimit"

export const getApiAdapter = () => {
    const getUserProfile = (username: string) => {
        return apiClient.user().getProfile(username)
            .then(stripRateLimit)
    }

    const getWantlist = (username: string, params?: DiscogsWantlistParams) => {
        return apiClient.user().wantlist().getReleases(username, params)
            .then(stripRateLimit)
    }

    return {
        getUserProfile,
        getWantlist,
    }
}