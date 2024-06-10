"use client"

import { WantlistEntryType } from "@/app/wantlist/[username]/types/WantlistEntryType";
import { Table } from "antd"
import Paragraph from "antd/es/typography/Paragraph";

type Props = {
    data: WantlistEntryType[]
}

const columns = [
    {
        key: "image",
        dataIndex: "thumbCoverUrl",
        title: "Cover",
        width: "60px",
        render: (src: string) => {
            return <>
                <img src={src} alt="lol" height={50} width={50}/>
            </>
        }
    },
    {
        key: "info",
        // dataIndex: "basic_information",
        title: "Title — Artist",
        width: "auto",
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
        width: "60px",
        title: "Year",
        align: "center",
        dataIndex: "year",
        render: (year: string) => <>{year || '-'}</>
    },
    Table.EXPAND_COLUMN,
]

const CollectionTableFull = ({data}: Props) => {
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
    />
  )
}

export default CollectionTableFull