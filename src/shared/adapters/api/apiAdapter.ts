import apiClient from "@/shared/services/api/apiClient"
import { DiscogsWantlistParams } from "@/shared/types/discogs/wantlist/DiscogsWantlistParams"
import { stripRateLimits } from "./utils/stripRateLimits";

const getApiAdapter = () => stripRateLimits({
  getUserProfile: (username: string) =>{
    return apiClient.user().getProfile(username)
  },

  getWantlist: (username: string, params?: DiscogsWantlistParams) => {
    return apiClient.user().wantlist().getReleases(username, params)
  }
})

const apiAdapter = getApiAdapter()

export default apiAdapter;
