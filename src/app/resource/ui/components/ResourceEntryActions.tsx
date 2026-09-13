"use client";

import { Button } from "antd";
import { ExportOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { ResourceEntryType } from "../../types/ResourceEntryType";
import style from "./style/resourceEntryActions.module.css";
import { useResourceEntryDetails } from "./ResourceEntryDetailsContext";

type Props = {
    entry: ResourceEntryType;
    href: string;
};

export default function ResourceEntryActions({ entry, href }: Props) {
    const { openDetails } = useResourceEntryDetails();

    return (
        <div className={style.actions}>
            <Button type="text" icon={<InfoCircleOutlined />} onClick={() => openDetails(entry)} aria-label={`Details for ${entry.title}`}>Details</Button>
            <Button type="text" href={href} target="_blank" rel="noopener noreferrer" icon={<ExportOutlined />} iconPosition="end" aria-label={`${entry.title} on Discogs (opens in a new tab)`}>Discogs</Button>
        </div>
    );
}
