"use client"
import { DiscogsWantlistEntry } from '@/app/types/DiscogsWantlistEntry'
import { getEntrySrc } from '@/utils/discogsLinks/getEntrySrc';
import { Button, Table } from 'antd'
import Paragraph from "antd/es/typography/Paragraph";
import DiscogsLogo from '../discogs/DiscogsLogo';

type Props = {
    data: DiscogsWantlistEntry[]
}

const columns = [
    {
        key: "format",
        width: "74px",
        dataIndex: "basic_information",
        render: (info: DiscogsWantlistEntry["basic_information"]) => {
            return <>
                <span>{info.formats[0].name}</span>
            </>
        }
    },
    {
        key: "info",
        dataIndex: "basic_information",
        title: "",
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
                    {info.title} ({info.year}) — {info.artists[0].name}
                </Paragraph>
            </>
        }
    },

]

const CollectionTableMin = ({data}: Props) => {
  return (
    <Table
        dataSource={data}
        columns={columns}
        showHeader={false}
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

export default CollectionTableMin