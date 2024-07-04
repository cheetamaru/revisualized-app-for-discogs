import ResourceTableMin from '@/app/resource/ui/components/ResourceTableMin'
import { Flex } from 'antd'
import React from 'react'
import { wantlistEntriesStyle } from '../style/wantlistEntriesStyle';
import { WantlistEntriesLayoutProps } from '../../types/WantlistEntriesProps';

const {
    tableContainerStyle,
  } = wantlistEntriesStyle;

const WantlistEntriesTableMin = ({entries}: WantlistEntriesLayoutProps) => {
  return (
    <Flex
        justify="center"
        style={tableContainerStyle}
      >
          <ResourceTableMin data={entries} />
      </Flex>
  )
}

export default WantlistEntriesTableMin;
