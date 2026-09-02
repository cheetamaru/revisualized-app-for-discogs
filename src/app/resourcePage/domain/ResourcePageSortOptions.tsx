import type { SelectProps } from "antd";
import { ResourcePageSortField } from "./ResourcePageSort";

export const ResourcePageSortOptions: SelectProps<ResourcePageSortField>["options"] = [
    { value: ResourcePageSortField.artist, label: "Artist" },
    { value: ResourcePageSortField.title, label: "Title" },
    { value: ResourcePageSortField.rating, label: "Rating" },
    { value: ResourcePageSortField.dateAdded, label: "Date added" },
    { value: ResourcePageSortField.year, label: "Year" },
];
