import apiAdapter from '@/shared/adapters/api/apiAdapter';
import { DiscogsWantlistResponse } from '@/shared/types/discogs/wantlist/DiscogsWantlistResponse';
import { unstable_cache } from 'next/cache';

type PaginationParams = { page: number; per_page: number; }

type Params = PaginationParams & {
    sort?: string;
    sort_order?: string;
}

export const getWantlist = unstable_cache(async (username: string, params?: Params): Promise<DiscogsWantlistResponse> => {
    const wantlist = await apiAdapter.getWantlist(username, { sort: "rating", sort_order: "desc", ...params });

    return wantlist as DiscogsWantlistResponse;
}, ['get-wantlist'], {
    revalidate: 3600,
})
