import { getResourcePageParams } from '@/app/resourcePage/utils/getResourcePageParams';
import React, { Suspense } from 'react'
import ResourceEntries from '@/app/resource/ui/components/ResourceEntries';
import { ResourcePageSearchParams } from '@/app/resourcePage/types/ResourcePageSearchParams';
import ResourcePageLayout from '@/app/resourcePage/ui/layouts/ResourcePageLayout';
import WantlistEntriesWrapper from './WantlistEntriesWrapper';
import { ResourcePageTabKey } from '@/app/resourcePage/domain/ResourcePageTabKey';

type Props = {
    params: { username: string }; 
    searchParams?: ResourcePageSearchParams;
}

const getSuspenseKey = (
    ...args: string[]
) => {
    return args.join("|")
}

const WantlistPageWrapper = ({params, searchParams}: Props) => {
    const {
        currentPage,
        perPage,
        sort,
        layout, 
    } = getResourcePageParams(searchParams)
    
    const suspenseKey = getSuspenseKey(
        currentPage.toString(),
        perPage.toString(),
        sort.toString(),
        layout.toString()
    )

  return (
    <ResourcePageLayout
        params={params}
        searchParams={searchParams}
        activeTabKey={ResourcePageTabKey.wantlist}
    >
        <Suspense
            key={suspenseKey}
            fallback={
                <ResourceEntries layout={layout} isLoading={true} entries={[]} />
            }
        >
            <WantlistEntriesWrapper
                params={params}
                searchParams={searchParams}
            />
        </Suspense>
    </ResourcePageLayout>
  )
}

export default WantlistPageWrapper
