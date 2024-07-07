import { SelectOption } from "@/shared/types/components/SelectOption";
import { ResourcePageSort } from "./ResourcePageSort";
import { Space } from "antd";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";

const DescLabel = (label: string) => {
    return <Space><span>{label}</span><FallOutlined /></Space>
}

const AscLabel = (label: string) => {
    return <Space><span>{label}</span><RiseOutlined /></Space>
}

const ratingLabel = "Rating";

export const ResourcePageSortOptions: SelectOption[] = [
    {
        value: ResourcePageSort.ratingDesc,
        label: DescLabel(ratingLabel),
    },
    {
        value: ResourcePageSort.ratingAsc,
        label: AscLabel(ratingLabel),
    }
];
