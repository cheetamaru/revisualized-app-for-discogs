"use client"
import { WantlistEntryType } from '@/app/wantlist/[username]/types/WantlistEntryType';
import { Table, TableColumnsType } from 'antd'
import Paragraph from "antd/es/typography/Paragraph";
import { ResourceTableMinColumns } from '../../domain/ResourceTableMinColumns';

type Props = {
    data: WantlistEntryType[]
}

const renderFormat = (info: WantlistEntryType) => {
    return <>
        <span>{info.mainFormatName}</span>
    </>
}

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

const {
    getColumns,
} = ResourceTableMinColumns;

const columns = getColumns({
    renderFormat,
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
        style={{
            maxWidth: 700
        }}
    />
  )
}

export default ResourceTableMin;
