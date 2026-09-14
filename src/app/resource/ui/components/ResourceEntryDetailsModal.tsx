"use client";

import { useEffect, useState } from "react";
import { Alert, Button, Image, Modal, Skeleton, Tag } from "antd";
import { ExportOutlined as ArrowUpRightOutlined } from "@ant-design/icons";
import type { GetReleaseResponse } from "@lionralfs/discogs-client";
import { ResourceEntryType } from "../../types/ResourceEntryType";
import style from "./style/resourceEntryDetailsModal.module.css";

type Props = {
    entry: ResourceEntryType;
    href: string;
    open: boolean;
    onClose: () => void;
};

export default function ResourceEntryDetailsModal({ entry, href, open, onClose }: Props) {
    const [release, setRelease] = useState<GetReleaseResponse>();
    const [error, setError] = useState(false);
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        if (!open || release) return;
        const controller = new AbortController();
        setError(false);
        fetch(`/api/releases/${entry.resourceId}`, { signal: controller.signal })
            .then(response => {
                if (!response.ok) throw new Error("Failed to load");
                return response.json();
            })
            .then(setRelease)
            .catch(() => { if (!controller.signal.aborted) setError(true); });
        return () => controller.abort();
    }, [open, entry.resourceId, release, attempt]);

    return (
        <Modal open={open} onCancel={onClose} title="Release details" width={760} footer={<Button href={href} target="_blank" rel="noopener noreferrer" icon={<ArrowUpRightOutlined />}>Open in Discogs</Button>}>
            <div className={style.content}>
                <div><Image src={entry.fullCoverUrl || entry.thumbCoverUrl || "/image_placeholder.jpg"} fallback="/image_placeholder.jpg" alt={entry.title} width="100%" /></div>
                <div className={style.info}>
                    <p className={style.artist}>{entry.artists.map(artist => artist.name).join(", ") || entry.mainArtistName}</p>
                    <h2>{entry.title}</h2>
                    <p>{[release?.released_formatted || entry.year || undefined, release?.country].filter(Boolean).join(" · ")}</p>
                    <p>Owner’s rating: {entry.rating ? `${entry.rating} / 5` : "Not rated"}</p>
                    <h3>Formats</h3>
                    {entry.formats.map((format, index) => <p key={index}>{format.quantity} × {format.name}{format.descriptions?.length ? ` · ${format.descriptions.join(", ")}` : ""}{format.additionalText ? ` · ${format.additionalText}` : ""}</p>)}
                    <h3>Labels</h3>
                    {(release?.labels || entry.labels).map((label, index) => <p key={index}>{label.name}{"catno" in label && label.catno ? ` · ${label.catno}` : ""}</p>)}
                    {release && <div>{[...(release.genres || []), ...(release.styles || [])].map((genre, index) => <Tag key={index}>{genre}</Tag>)}</div>}
                </div>
            </div>
            {error ? <Alert type="warning" showIcon message="Could not load additional details" action={<Button onClick={() => setAttempt(value => value + 1)}>Retry</Button>} /> : !release ? <Skeleton active paragraph={{ rows: 4 }} /> : <div className={style.info}>
                {!!release.tracklist?.length && <><h3>Tracklist</h3>{release.tracklist.map((track, index) => <div className={style.track} key={index}><span>{track.position}</span><span>{track.title}</span><span>{track.duration}</span></div>)}</>}
                {!!release.extraartists?.length && <><h3>Credits</h3>{release.extraartists.map((artist, index) => <p key={index}>{artist.name} · {artist.role}</p>)}</>}
                {!!release.companies?.length && <><h3>Companies</h3>{release.companies.map((company, index) => <p key={index}>{company.entity_type_name}: {company.name}</p>)}</>}
                {!!release.identifiers?.length && <><h3>Identifiers</h3>{release.identifiers.map((identifier, index) => <p key={index}>{identifier.type}: {identifier.value}</p>)}</>}
                {!!release.notes && <><h3>Notes</h3><p className={style.notes}>{release.notes}</p></>}
            </div>}
        </Modal>
    );
}
