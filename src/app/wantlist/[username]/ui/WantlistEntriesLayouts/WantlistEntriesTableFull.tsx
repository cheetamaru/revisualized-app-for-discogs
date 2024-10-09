import React from 'react'
import { WantlistEntriesLayoutProps } from '../../types/WantlistEntriesProps'
import { Flex } from 'antd'
import ResourceTableFull from '@/app/resource/ui/components/ResourceTableFull'
import { wantlistEntriesStyle } from '../style/wantlistEntriesStyle';

const {
    tableContainerStyle,
  } = wantlistEntriesStyle;

const WantlistEntriesTableFull = ({entries, isLoading}: WantlistEntriesLayoutProps) => {
  return (
    <Flex
        justify="center"
        style={tableContainerStyle}
      >
        <ResourceTableFull data={entries} loading={isLoading} />
    </Flex>
  )
}

export default WantlistEntriesTableFull;
