import apiClient from '@/service/api/apiClient'
import { cache } from 'react'
 
export const getUser = cache(async (username: string) => {
    const user = await apiClient.user().getProfile(username);

    return user.data
})