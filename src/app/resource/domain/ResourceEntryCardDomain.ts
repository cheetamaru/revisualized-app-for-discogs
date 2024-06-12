import { ResourceEntryType } from "../types/ResourceEntryType";

const defaultImageHeight = 210;

const getCardInfoForCopy = <T extends ResourceEntryType>(entry: T): string => {
    const { title, mainArtistName } = entry;

    return `${title} — ${mainArtistName}`
}

const getCopyMessage = (infoForCopy: string) => {
    return `Copied: ${infoForCopy}`
}

export const ResourceEntryCardDomain = {
    defaultImageHeight,
    getCardInfoForCopy,
    getCopyMessage,
}
