import { Flex } from "antd";
import { ResourceEntriesLayoutProps } from "../../../types/ResourceEntriesProps";
import ResourceTableMin from "../ResourceTableMin";
import { resourceEntriesStyle } from "../style/resourceEntriesStyle";

const ResourceEntriesTableMin = ({ entries, isLoading }: ResourceEntriesLayoutProps) => (
    <Flex justify="center" style={resourceEntriesStyle.tableContainerStyle}>
        <ResourceTableMin data={entries} loading={isLoading} />
    </Flex>
);

export default ResourceEntriesTableMin;
