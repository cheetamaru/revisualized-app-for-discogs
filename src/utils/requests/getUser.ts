import { DiscogsUser } from '@/app/types/DiscogsUser';
import apiClient from '@/shared/services/api/apiClient'
import { unstable_cache } from 'next/cache';
 
export const getUser = unstable_cache(async (username: string): Promise<DiscogsUser> => {
    const user = await apiClient.user().getProfile(username);

    return user.data
}, ["get-user"], {
    revalidate: 86400,
})