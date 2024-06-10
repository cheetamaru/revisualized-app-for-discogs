import { unstable_cache } from 'next/cache';
import apiAdapter from '@/shared/adapters/api/apiAdapter';
import { WantlistApiDomain } from '../../domain/WantlistApiDomain';
import { DiscogsWantlistResponse } from '@/shared/types/discogs/wantlist/DiscogsWantlistResponse';
import { DiscogsWantlistParams } from '@/shared/types/discogs/wantlist/DiscogsWantlistParams';

const {
    getterCacheKey,
    getterRevalidateTimeout
} = WantlistApiDomain;

const getCachedWantlist = unstable_cache(
    async (username: string, params?: DiscogsWantlistParams): Promise<DiscogsWantlistResponse> => {
        const wantlist = await apiAdapter.getWantlist(username, params);

        return wantlist as DiscogsWantlistResponse;
    },
    [getterCacheKey],
    {
        revalidate: getterRevalidateTimeout,
    }
)

export default {
    getCachedWantlist,
}