import { ResourcePageLayout } from '@/app/resourcePage/domain/ResourcePageLayout'
import React from 'react'
import { WantlistEntryType } from '../types/WantlistEntryType';
import { Flex } from 'antd';
import style from "./style/wantlistEntries.module.css"
import ResourceEntryCard from '@/app/resource/ui/components/ResourceEntryCard';
import ResourceTableFull from '@/app/resource/ui/components/ResourceTableFull';
import ResourceTableMin from '@/app/resource/ui/components/ResourceTableMin';
import { wantlistEntriesStyle } from './style/wantlistEntriesStyle';

type Props = {
  layout: ResourcePageLayout;
  entries: WantlistEntryType[]
}

const {
  cardContainerStyle,
  tableContainerStyle,
} = wantlistEntriesStyle;

const WantlistEntries = ({
  layout,
  entries,
}: Props) => {
  const isTiles = layout === ResourcePageLayout.tiles;
  const isTableFull = layout === ResourcePageLayout.tableFull;
  const isTableMin = layout === ResourcePageLayout.tableMin;

  if (isTiles) {
    return <>
      <Flex
        justify="center"
        className={style.container}
      >
          <div
            className={style.items_container}
            style={cardContainerStyle}
          >
              {
                entries?.map(el => <ResourceEntryCard key={el.resourceId} entry={el} />)
              }
          </div>
      </Flex>
    </>
  }

  if (isTableFull) {
    return <>
      <Flex
        justify="center"
        style={tableContainerStyle}
      >
          <ResourceTableFull data={entries} />
      </Flex>
    </>
  }

  if (isTableMin) {
    return <>
      <Flex
        justify="center"
        style={tableContainerStyle}
      >
          <ResourceTableMin data={entries} />
      </Flex>
    </>
  }
}

export default WantlistEntries