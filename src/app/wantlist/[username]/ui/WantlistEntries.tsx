import { ResourcePageLayout } from '@/app/resourcePage/domain/ResourcePageLayout'
import React from 'react'

import { WantlistEntriesProps } from '../types/WantlistEntriesProps';
import WantlistEntriesTiles from './WantlistEntriesLayouts/WantlistEntriesTiles';
import WantlistEntriesTableFull from './WantlistEntriesLayouts/WantlistEntriesTableFull';
import WantlistEntriesTableMin from "./WantlistEntriesLayouts/WantlistEntriesTableMin"

const layoutComponentMapper = new Map([
  [ResourcePageLayout.tiles, WantlistEntriesTiles],
  [ResourcePageLayout.tableFull, WantlistEntriesTableFull],
  [ResourcePageLayout.tableMin, WantlistEntriesTableMin],
])

const WantlistEntries = ({
  layout,
  entries,
}: WantlistEntriesProps) => {
  const renderLayoutComponent = layoutComponentMapper.get(layout)

  if (!renderLayoutComponent) {
    return WantlistEntriesTiles({ entries })
  }

  return renderLayoutComponent({ entries })
}

export default WantlistEntries;
