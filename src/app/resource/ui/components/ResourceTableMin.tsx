"use client"
import { WantlistEntryType } from '@/app/wantlist/[username]/types/WantlistEntryType';
import { Table } from 'antd'
import Paragraph from "antd/es/typography/Paragraph";
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

const renderInfo = (info: WantlistEntryType) => {
    return <>
        <Paragraph
            copyable
            ellipsis={
                {
                    rows: 2
                }
            }
        >
            {info.title} — {info.mainArtistName}
        </Paragraph>
    </>
}

const renderYear = (year: string) => <>{year || '-'}</>

const columns = getColumns({
    renderInfo,
    renderYear
})

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
