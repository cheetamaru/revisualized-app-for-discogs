import { isInRange } from "@/shared/utils/isInRange";
import { SyntheticEvent, useState } from "react";
import { ResourceEntryCardCoverDomain } from "../domain/ResourceEntryCardCoverDomain";

const { defaultAspectRatio } = ResourceEntryCardCoverDomain;

const defaultTreshold = 0.2;

const isNearDefault = (aspectRatio: number) => {
    return isInRange(
        aspectRatio,
        defaultAspectRatio - defaultTreshold,
        defaultAspectRatio + defaultTreshold
    )
}

export const useResourceEntryCardCover = (coverSize: number) => {
    const [widthHeightRatio, setWidthHeightRatio] = useState(defaultAspectRatio);

    const internalWidth = Math.ceil(coverSize * widthHeightRatio);
    const internalHeight = coverSize; 

    const handleLoad = (val: SyntheticEvent<HTMLImageElement, Event>) => {
        const nextImageTarget = val.target as HTMLImageElement;

        const naturalWidth = nextImageTarget.naturalWidth;
        const naturalHeight = nextImageTarget.naturalHeight;

        const newAspectRatio = naturalWidth / naturalHeight;

        if (isNearDefault(newAspectRatio)) {
            setWidthHeightRatio(defaultAspectRatio);
            return;
        }

        setWidthHeightRatio(newAspectRatio)
    }

    return {
        internalWidth,
        internalHeight,
        handleLoad,
    }
}