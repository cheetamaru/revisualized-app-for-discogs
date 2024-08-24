import { TableColumnsType } from "antd"
import Table from "antd/es/table"
import RenderResourceInfo from "../ui/components/ResourceTableCellRenders/renderResourceInfo";
import RenderResourceYear from "../ui/components/ResourceTableCellRenders/renderResourceYear";
import RenderResourceCover from "../ui/components/ResourceTableCellRenders/RenderResourceCover";

const getColumns = (): TableColumnsType => {
    return [
        {
            key: "image",
            title: "Cover",
            width: "60px",
            render: RenderResourceCover,
        },
        {
            key: "info",
            title: "Title — Artist",
            render: RenderResourceInfo,
        },
        {
            key: "year",
            title: "Year",
            width: "60px",
            align: "center",
            dataIndex: "year",
            render: RenderResourceYear,
        },
        Table.EXPAND_COLUMN,
    ]
}

export const ResourceTableFullColumns = {
    getColumns,
}
