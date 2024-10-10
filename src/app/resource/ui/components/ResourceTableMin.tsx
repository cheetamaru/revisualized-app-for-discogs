"use client"
import { Table } from 'antd'
import { ResourceTableMinColumns } from '../../domain/ResourceTableMinColumns';
import { resourceTableStyles } from './style/resourceTableStyles';
import { ResourceEntryType } from '../../types/ResourceEntryType';

type Props = {
    data: ResourceEntryType[];
    loading?: boolean;
}

const {
    generalStyle
} = resourceTableStyles;

const {
    getColumns,
} = ResourceTableMinColumns;

const columns = getColumns()

const ResourceTableMin = ({data, loading}: Props) => {
  return (
    <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        tableLayout="fixed"
        size="small"
        rowKey="id"
        style={generalStyle}
        loading={loading}
    />
  )
}

export default ResourceTableMin;
