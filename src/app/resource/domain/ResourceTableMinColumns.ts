import { WantlistEntryType } from "@/app/wantlist/[username]/types/WantlistEntryType"
import { TableColumnsType } from "antd"
import Table, { ColumnType } from "antd/es/table"

type GetColumnsType = {
    renderFormat: ColumnType<WantlistEntryType>["render"];
    renderInfo: ColumnType<WantlistEntryType>["render"];
    renderYear: ColumnType<WantlistEntryType>["render"];
}

const getColumns = ({
    renderFormat,
    renderInfo,
    renderYear
}: GetColumnsType): TableColumnsType => {
    return [
        {
            key: "format",
            width: "74px",
            title: "Format",
            align: "center",
            render: renderFormat,
        },
        {
            key: "info",
            title: "Title — Artist",
            render: renderInfo
        },
        {
            key: "year",
            title: "Year",
            width: "60px",
            align: "center",
            dataIndex: "year",
            render: renderYear,
        },
        Table.EXPAND_COLUMN,
    ]
}

export const ResourceTableMinColumns = {
    getColumns,
}
