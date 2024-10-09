"use client"
import { Table } from 'antd'
import { resourceTableStyles } from './style/resourceTableStyles';
import { ResourceEntryType } from '../../types/ResourceEntryType';
import { ResourceTableFullColumns } from '../../domain/ResourceTableFullColumns';

type Props = {
    data: ResourceEntryType[];
    loading?: boolean;
}

const {
    generalStyle
} = resourceTableStyles;

const {
    getColumns,
} = ResourceTableFullColumns;

const columns = getColumns()

const ResourceTableFull = ({data, loading}: Props) => {
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

export default ResourceTableFull;
