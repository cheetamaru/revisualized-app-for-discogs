"use client"
import { DiscogsWantlistEntry } from '@/shared/types/discogs/wantlist/DiscogsWantlistEntry'
import { Table } from 'antd'
import Paragraph from "antd/es/typography/Paragraph";

type Props = {
    data: DiscogsWantlistEntry[]
}

const columns = [
    {
        key: "format",
        width: "74px",
        dataIndex: "basic_information",
        title: "Format",
        align: "center",
        render: (info: DiscogsWantlistEntry["basic_information"]) => {
            return <>
                <span>{info.formats[0].name}</span>
            </>
        }
    },
    {
        key: "info",
        dataIndex: "basic_information",
        title: "Title — Artist",
        render: (info: DiscogsWantlistEntry["basic_information"]) => {
            return <>
                <Paragraph
                    copyable
                    ellipsis={
                        {
                            rows: 2
                        }
                    }
                >
                    {info.title} — {info.artists[0].name}
                </Paragraph>
            </>
        }
    },
    {
        key: "year",
        title: "Year",
        width: "60px",
        align: "center",
        dataIndex: ["basic_information", "year"],
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