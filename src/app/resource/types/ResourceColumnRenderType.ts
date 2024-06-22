import { ColumnType } from "antd/es/table";
import { ResourceEntryType } from "./ResourceEntryType";

export type ResourceColumnRenderType<
    T extends ResourceEntryType = ResourceEntryType
> = ColumnType<T>["render"];
