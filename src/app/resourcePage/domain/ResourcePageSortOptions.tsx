import { SelectOption } from "@/shared/types/components/SelectOption";
import { ResourcePageSort } from "./ResourcePageSort";
import { Space } from "antd";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";

export const ResourcePageSortOptions: SelectOption[] = [
    {
        value: ResourcePageSort.ratingDesc,
        label: <Space><span>Rating</span><FallOutlined /></Space>
    },
    {
        value: ResourcePageSort.ratingAsc,
        label: <Space><span>Rating</span><RiseOutlined /></Space>
    }
];
