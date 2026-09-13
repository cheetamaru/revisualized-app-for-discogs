"use client";

import { ReactNode, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { DiscogsLisnksDomain } from "@/shared/domain/discogsLinks/DiscogsLinksDomain";
import { ResourceEntryType } from "../../types/ResourceEntryType";
import { ResourceEntryDetailsContext } from "./ResourceEntryDetailsContext";

const ResourceEntryDetailsModal = dynamic(() => import("./ResourceEntryDetailsModal"), {
    ssr: false,
});

export default function ResourceEntryDetailsProvider({ children }: { children: ReactNode }) {
    const [selectedEntry, setSelectedEntry] = useState<ResourceEntryType>();
    const contextValue = useMemo(() => ({ openDetails: setSelectedEntry }), []);

    return (
        <ResourceEntryDetailsContext.Provider value={contextValue}>
            {children}
            {selectedEntry && (
                <ResourceEntryDetailsModal
                    key={selectedEntry.resourceKey}
                    entry={selectedEntry}
                    href={DiscogsLisnksDomain.getEntrySrc(selectedEntry.resourceId)}
                    open
                    onClose={() => setSelectedEntry(undefined)}
                />
            )}
        </ResourceEntryDetailsContext.Provider>
    );
}
