import { DiscogsUser } from '@/app/types/DiscogsUser';
import apiClient from '@/service/api/apiClient'
import { cache } from 'react'
 
export const getUser = cache(async (username: string): Promise<DiscogsUser> => {
    const user = await apiClient.user().getProfile(username);

    return user.data
})