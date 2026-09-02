import { Empty, Flex } from "antd";
import ResourcePageCardsLoading from "@/app/resourcePage/ui/components/ResourcePageCardsLoading";
import { ResourceEntriesLayoutProps } from "../../../types/ResourceEntriesProps";
import ResourceEntryCard from "../ResourceEntryCard";
import style from "../style/resourceEntries.module.css";
import { resourceEntriesStyle } from "../style/resourceEntriesStyle";

const ResourceEntriesTiles = ({ entries, isLoading }: ResourceEntriesLayoutProps) => {
    if (isLoading) return <ResourcePageCardsLoading />;
    if (!entries.length) return <Flex justify="center" style={resourceEntriesStyle.cardsEmptyStyle}><Empty /></Flex>;

    return (
        <Flex justify="center" className={style.container}>
            <div className={style.items_container} style={resourceEntriesStyle.cardContainerStyle}>
                {entries.map(entry => <ResourceEntryCard key={entry.resourceKey} entry={entry} />)}
            </div>
        </Flex>
    );
};

export default ResourceEntriesTiles;
