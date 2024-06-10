"use client"
import { WantlistEntryType } from '@/app/wantlist/[username]/types/WantlistEntryType';
import { Table } from 'antd'
import Paragraph from "antd/es/typography/Paragraph";

type Props = {
    data: WantlistEntryType[]
}

const columns = [
    {
        key: "format",
        width: "74px",
        // dataIndex: "basic_information",
        title: "Format",
        align: "center",
        render: (info: WantlistEntryType) => {
            return <>
                <span>{info.mainFormatName}</span>
            </>
        }
    },
    {
        key: "info",
        // dataIndex: "basic_information",
        title: "Title — Artist",
        render: (info: WantlistEntryType) => {
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
    },
    {
        key: "year",
        title: "Year",
        width: "60px",
        align: "center",
        dataIndex: "year",
        render: (year: string) => <>{year || '-'}</>
    },
    Table.EXPAND_COLUMN,
]

const CollectionTableMin = ({data}: Props) => {
  return (
    <Table
        dataSource={data}
        columns={columns}
        // showHeader={false}
        pagination={false}
        tableLayout="fixed"
        size="small"
        rowKey="id"
        style={{
            maxWidth: 700
        }}
        // expandable={{
        //     expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.basic_information.id}</p>,
        //     columnWidth: 40
        // }}
    />
  )
}

export default CollectionTableMin