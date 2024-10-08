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
  isLoading,
}: WantlistEntriesProps) => {
  const renderLayoutComponent = layoutComponentMapper.get(layout)

  if (!renderLayoutComponent) {
    return WantlistEntriesTiles({ entries, isLoading })
  }

  return renderLayoutComponent({ entries, isLoading })
}

export default WantlistEntries;
