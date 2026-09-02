import { ResourcePageLayout } from "@/app/resourcePage/domain/ResourcePageLayout";
import { ResourceEntryType } from "./ResourceEntryType";

export type ResourceEntriesProps = {
    layout: ResourcePageLayout;
    entries: ResourceEntryType[];
    isLoading?: boolean;
};

export type ResourceEntriesLayoutProps = Pick<ResourceEntriesProps, "entries" | "isLoading">;
