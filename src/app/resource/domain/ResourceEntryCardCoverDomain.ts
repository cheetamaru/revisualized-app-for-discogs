import { MusicEntryFormat } from "@/shared/types/musicInfo/MusicEntryFormat";

const getCoverGridOptions = (coverImageHeight: number) => {
    const columns = 10;
    const coverParts = 7;
    const onePart = Math.ceil(coverImageHeight/columns)

    const coverSize = Math.ceil(coverImageHeight/columns * coverParts)

    return {
        onePart,
        coverSize,
    }
}

const getAllowedDescription = (descriptions: MusicEntryFormat["descriptions"]): string | undefined => {
    return descriptions[0]?.length <= 3 ? descriptions[0] : undefined
}

export const ResourceEntryCardCoverDomain = {
    getCoverGridOptions,
    getAllowedDescription,
}
