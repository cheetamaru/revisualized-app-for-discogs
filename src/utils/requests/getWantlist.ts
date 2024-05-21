import apiClient from '@/service/api/apiClient'
import { cache } from 'react'

type PaginationParams = { page: number; per_page: number; }

export const getWantlist = cache(async (username: string, params?: PaginationParams) => {
    const user = await apiClient.user().wantlist().getReleases(username, { ...params });

    console.log("rateLimit", user.rateLimit)

    return user.data
})
