import { DiscogsProfile } from '@/shared/types/discogs/profile/DiscogsProfile';
import { unstable_cache } from 'next/cache';
import apiAdapter from '@/shared/adapters/api/apiAdapter';

export const getUser = unstable_cache(async (username: string): Promise<DiscogsProfile> => {
    const profile = await apiAdapter.getUserProfile(username);

    return profile
}, ["get-user"], {
    revalidate: 86400,
})