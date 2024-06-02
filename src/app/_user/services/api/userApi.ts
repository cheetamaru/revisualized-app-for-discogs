import { DiscogsProfile } from '@/shared/types/discogs/profile/DiscogsProfile';
import { unstable_cache } from 'next/cache';
import apiAdapter from '@/shared/adapters/api/apiAdapter';
import { UserApiDomain } from '../../domain/UserApiDomain';

const { profileCacheKey, profileRevalidateTimeout } = UserApiDomain;

const getCachedUserProfile = unstable_cache(
    async (username: string): Promise<DiscogsProfile> => {
        const profile = await apiAdapter.getUserProfile(username);

        return profile
    },
    [profileCacheKey],
    {
        revalidate: profileRevalidateTimeout,
    }
)

export default {
    getCachedUserProfile,
}