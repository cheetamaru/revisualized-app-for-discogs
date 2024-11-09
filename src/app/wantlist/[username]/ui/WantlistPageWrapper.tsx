import { getResourcePageParams } from '@/app/resourcePage/utils/getResourcePageParams';
import React, { Suspense } from 'react'
import WantlistEntries from './WantlistEntries';
import { ResourcePageSearchParams } from '@/app/resourcePage/types/ResourcePageSearchParams';
import ResourcePageLayout from '@/app/resourcePage/ui/layouts/ResourcePageLayout';
import WantlistEntriesWrapper from './WantlistEntriesWrapper';

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
    >
        <Suspense
            key={suspenseKey}
            fallback={
                <WantlistEntries layout={layout} isLoading={true} entries={[]} />
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