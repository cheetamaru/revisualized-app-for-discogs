import apiClient from "@/shared/services/api/apiClient"
import { DiscogsWantlistParams } from "@/shared/types/discogs/wantlist/DiscogsWantlistParams"
import { DiscogsCollectionParams } from "@/shared/types/discogs/collection/DiscogsCollectionParams"
import { stripRateLimits } from "./utils/stripRateLimits";

const getApiAdapter = () => stripRateLimits({
  getUserProfile: (username: string) =>{
    return apiClient.user().getProfile(username)
  },

  getWantlist: (username: string, params?: DiscogsWantlistParams) => {
    return apiClient.user().wantlist().getReleases(username, params)
  },

  getCollection: (username: string, params?: DiscogsCollectionParams) => {
    return apiClient.user().collection().getReleases(username, 0, params)
  }
})

const apiAdapter = getApiAdapter()

export default apiAdapter;
