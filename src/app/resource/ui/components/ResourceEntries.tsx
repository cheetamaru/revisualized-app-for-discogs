import { ResourcePageLayout } from "@/app/resourcePage/domain/ResourcePageLayout";
import { ResourceEntriesProps } from "../../types/ResourceEntriesProps";
import ResourceEntriesTableFull from "./ResourceEntriesLayouts/ResourceEntriesTableFull";
import ResourceEntriesTableMin from "./ResourceEntriesLayouts/ResourceEntriesTableMin";
import ResourceEntriesTiles from "./ResourceEntriesLayouts/ResourceEntriesTiles";

const layoutComponentMapper = new Map([
    [ResourcePageLayout.tiles, ResourceEntriesTiles],
    [ResourcePageLayout.tableFull, ResourceEntriesTableFull],
    [ResourcePageLayout.tableMin, ResourceEntriesTableMin],
]);

const ResourceEntries = ({ layout, entries, isLoading }: ResourceEntriesProps) => {
    const LayoutComponent = layoutComponentMapper.get(layout) || ResourceEntriesTiles;
    return <LayoutComponent entries={entries} isLoading={isLoading} />;
};

export default ResourceEntries;
