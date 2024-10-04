import { MusicEntryFormat } from "@/shared/types/musicInfo/MusicEntryFormat";

const defaultAspectRatio = 1;

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

const getContainerStyle = ({
    onePart,
    coverSize
}: {
    onePart: number;
    coverSize: number;
}): React.CSSProperties => {
    return {
        height: coverSize,
        gridTemplateColumns: `repeat(9, ${onePart}px)`,
        backgroundColor: "#dedede",
        borderRadius: "8px 8px 0 0",
        display: "grid",
    }
}


export const ResourceEntryCardCoverDomain = {
    defaultAspectRatio,
    getCoverGridOptions,
    getAllowedDescription,
    getContainerStyle,
}
