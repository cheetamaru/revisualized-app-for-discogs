"use client";

import { useState } from "react";
import { Button } from "antd";
import { ExportOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { ResourceEntryType } from "../../types/ResourceEntryType";
import ResourceEntryDetailsModal from "./ResourceEntryDetailsModal";
import style from "./style/resourceEntryActions.module.css";

export default function ResourceEntryActions({ entry, href }: { entry: ResourceEntryType; href: string }) {
    const [open, setOpen] = useState(false);

    return <>
        <div className={style.actions}>
            <Button type="text" icon={<InfoCircleOutlined />} onClick={() => setOpen(true)} aria-label={`Details for ${entry.title}`}>Details</Button>
            <Button type="text" href={href} target="_blank" rel="noopener noreferrer" icon={<ExportOutlined />} iconPosition="end" aria-label={`${entry.title} on Discogs (opens in a new tab)`}>Discogs</Button>
        </div>
        <ResourceEntryDetailsModal key={entry.resourceId} entry={entry} href={href} open={open} onClose={() => setOpen(false)} />
    </>;
}
