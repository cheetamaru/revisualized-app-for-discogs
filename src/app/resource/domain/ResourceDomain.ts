import { ResourceEntryType } from "../types/ResourceEntryType";

const getInfoForCopy = <T extends ResourceEntryType>(entry: T): string => {
    const { title, mainArtistName } = entry;

    return `${title} — ${mainArtistName}`
}

const getCopyMessage = (infoForCopy: string) => {
    return `Copied: ${infoForCopy}`
}

export const ResourceDomain = {
    getInfoForCopy,
    getCopyMessage,
}