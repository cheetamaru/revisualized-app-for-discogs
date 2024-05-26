import apiClient from '@/service/api/apiClient'
import { cache } from 'react'

type PaginationParams = { page: number; per_page: number; }

type Params = PaginationParams & {
    sort?: string;
    sort_order?: string;
}

export const getWantlist = cache(async (username: string, params?: Params) => {
    const user = await apiClient.user().wantlist().getReleases(username, { sort: "rating", sort_order: "desc", ...params });

    console.log("rateLimit", user.rateLimit)

    return user.data
})
