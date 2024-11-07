import ResourcePageLayoutComponent from '@/app/resourcePage/ui/layouts/ResourcePageLayout'
import React from 'react'
import WantlistEntries from './WantlistEntries'
import type { ResourcePageLayout } from '@/app/resourcePage/domain/ResourcePageLayout';

type Props = {
    params: { username: string };
    layout: ResourcePageLayout;
}

const WantlistPageWrapperLoading = ({
    params,
    layout,
}: Props) => {
  return (
    <ResourcePageLayoutComponent
        params={params}
        totalItems={0}
    >
        <WantlistEntries layout={layout} isLoading={true} entries={[]} />
    </ResourcePageLayoutComponent>
  )
}

export default WantlistPageWrapperLoading