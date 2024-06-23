import { TableColumnsType } from "antd"
import Table from "antd/es/table"
import renderResourceFormat from "../ui/components/ResourceTableCellRenders/renderResourceFormat";
import renderResourceInfo from "../ui/components/ResourceTableCellRenders/renderResourceInfo";
import renderResourceYear from "../ui/components/ResourceTableCellRenders/renderResourceYear";

const getColumns = (): TableColumnsType => {
    return [
        {
            key: "format",
            width: "74px",
            title: "Format",
            align: "center",
            render: renderResourceFormat,
        },
        {
            key: "info",
            title: "Title — Artist",
            render: renderResourceInfo,
        },
        {
            key: "year",
            title: "Year",
            width: "60px",
            align: "center",
            dataIndex: "year",
            render: renderResourceYear,
        },
        Table.EXPAND_COLUMN,
    ]
}

export const ResourceTableMinColumns = {
    getColumns,
}
