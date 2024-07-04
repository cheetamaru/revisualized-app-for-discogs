import { ResourcePageLayout } from "@/app/resourcePage/domain/ResourcePageLayout";
import { WantlistEntryType } from "./WantlistEntryType";

export type WantlistEntriesProps = {
    layout: ResourcePageLayout;
    entries: WantlistEntryType[]
}

export type WantlistEntriesLayoutProps = {
    entries: WantlistEntriesProps["entries"]
}
