import apiClient from "../services/api/apiClient"
import { WantlistParams } from "../types/discogs/WantlistParams"

export const getApiAdapter = () => {
    const getUserProfile = (username: string) => {
        return apiClient.user().getProfile(username)
    }

    const getWantlist = (username: string, params?: WantlistParams) => {
        return apiClient.user().wantlist().getReleases(username, params)
    }

    return {
        getUserProfile,
        getWantlist,
    }
}