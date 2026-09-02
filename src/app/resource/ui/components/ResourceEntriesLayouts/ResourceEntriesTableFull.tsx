import { Flex } from "antd";
import { ResourceEntriesLayoutProps } from "../../../types/ResourceEntriesProps";
import ResourceTableFull from "../ResourceTableFull";
import { resourceEntriesStyle } from "../style/resourceEntriesStyle";

const ResourceEntriesTableFull = ({ entries, isLoading }: ResourceEntriesLayoutProps) => (
    <Flex justify="center" style={resourceEntriesStyle.tableContainerStyle}>
        <ResourceTableFull data={entries} loading={isLoading} />
    </Flex>
);

export default ResourceEntriesTableFull;
