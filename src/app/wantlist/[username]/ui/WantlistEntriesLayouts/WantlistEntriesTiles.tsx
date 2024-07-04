import React from 'react'
import { WantlistEntriesLayoutProps } from '../../types/WantlistEntriesProps'
import { Flex } from 'antd'
import style from "../style/wantlistEntries.module.css"
import { wantlistEntriesStyle } from '../style/wantlistEntriesStyle';
import ResourceEntryCard from '@/app/resource/ui/components/ResourceEntryCard';

const {
    cardContainerStyle,
  } = wantlistEntriesStyle;

const WantlistEntriesTiles = ({entries}: WantlistEntriesLayoutProps) => {
  return (
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
  )
}

export default WantlistEntriesTiles;
