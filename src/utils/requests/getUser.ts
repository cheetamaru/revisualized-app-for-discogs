import { DiscogsProfile } from '@/shared/types/discogs/profile/DiscogsProfile';
import apiClient from '@/shared/services/api/apiClient'
import { unstable_cache } from 'next/cache';
 
export const getUser = unstable_cache(async (username: string): Promise<DiscogsProfile> => {
    const user = await apiClient.user().getProfile(username);

    return user.data
}, ["get-user"], {
    revalidate: 86400,
})