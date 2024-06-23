"use client"
import { WantlistEntryType } from '@/app/wantlist/[username]/types/WantlistEntryType';
import { Table } from 'antd'
import { ResourceTableMinColumns } from '../../domain/ResourceTableMinColumns';
import { resourceTableStyles } from './style/resourceTableStyles';

type Props = {
    data: WantlistEntryType[]
}

const {
    generalStyle
} = resourceTableStyles;

const {
    getColumns,
} = ResourceTableMinColumns;

const columns = getColumns()

const ResourceTableMin = ({data}: Props) => {
  return (
    <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        tableLayout="fixed"
        size="small"
        rowKey="id"
        style={generalStyle}
    />
  )
}

export default ResourceTableMin;
