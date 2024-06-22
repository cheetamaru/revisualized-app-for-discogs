import { TableColumnsType } from "antd"
import Table from "antd/es/table"
import { ResourceEntryType } from "../types/ResourceEntryType";
import { ResourceColumnRenderType } from "../types/ResourceColumnRenderType";
import renderResourceFormat from "../ui/components/ResourceTableCellRenders/renderResourceFormat";

type GetColumnsType<T extends ResourceEntryType = ResourceEntryType> = {
    renderInfo: ResourceColumnRenderType<T>;
    renderYear: ResourceColumnRenderType<T>;
}

const getColumns = ({
    renderInfo,
    renderYear
}: GetColumnsType): TableColumnsType => {
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
