"use client";

import { createContext, useContext } from "react";
import { ResourceEntryType } from "../../types/ResourceEntryType";

export type ResourceEntryDetailsContextValue = {
    openDetails: (entry: ResourceEntryType) => void;
};

export const ResourceEntryDetailsContext = createContext<ResourceEntryDetailsContextValue | undefined>(undefined);

export const useResourceEntryDetails = () => {
    const context = useContext(ResourceEntryDetailsContext);

    if (!context) {
        throw new Error("useResourceEntryDetails must be used within ResourceEntryDetailsProvider");
    }

    return context;
};
