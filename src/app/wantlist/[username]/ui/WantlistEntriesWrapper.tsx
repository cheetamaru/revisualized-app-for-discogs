import { getResourcePageParams } from '@/app/resourcePage/utils/getResourcePageParams';
import React from 'react'
import wantlistApiAdapter from '../adapters/wantlistApiAdapter';
import ErrorWithSearcher from '@/shared/ui/components/global/ErrorWithSearcher';
import WantlistEntries from './WantlistEntries';
import { ResourcePageSearchParams } from '@/app/resourcePage/types/ResourcePageSearchParams';

type Props = {
    params: { username: string }; 
    searchParams?: ResourcePageSearchParams;
}
const WantlistEntriesWrapper = async ({params, searchParams}: Props) => {
    const {
        currentPage,
        perPage,
        sort,
        layout, 
    } = getResourcePageParams(searchParams)

    const { username } = params;

    const wantlist = await wantlistApiAdapter.getWantlist(
        username,
        {
            page: currentPage,
            perPage: perPage,
            sort,
        })

    if (wantlist.error) {
        return <ErrorWithSearcher message={wantlist.error} />
    }

    return (
        <WantlistEntries
            layout={layout}
            entries={wantlist.entries || []}
        />
    )
}

export default WantlistEntriesWrapper