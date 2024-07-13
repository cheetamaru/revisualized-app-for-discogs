"use client"
import Image from "next/image";
import style from "@/app/resource/ui/components/style/resourceEntryCard.module.css"
import { resourceEntryCardStyle } from "../style/resourceEntryCardStyles";
import { SyntheticEvent, useState } from "react";

type Props = {
    src?: string;
    coverSize: number;
    title: string;
    description?: string;
}

const { coverImagePlaceholderStyle, coverImageStyle } = resourceEntryCardStyle;

function isBetween(x: number, min: number, max: number) {
    return x >= min && x <= max;
  }

const ResourceEntryCardCoverImage = ({ src, coverSize, title, description }: Props) => {
    if (!src) {
        return (
            <Image
                src="/image_placeholder.jpg"
                width={coverSize}
                height={coverSize}
                alt="no image" 
                style={coverImagePlaceholderStyle}
                className={style.cover}
            />
        )
    }

    const [widthHeightRatio, setWidthHeightRatio] = useState(1);

    const internalWidth = Math.ceil(coverSize * widthHeightRatio);
    const internalHeight = coverSize; 

    const handleLoad = (val: SyntheticEvent<HTMLImageElement, Event>) => {
        const nextImageTarget = val.target as HTMLImageElement;

        const naturalWidth = nextImageTarget.naturalWidth;
        const naturalHeight = nextImageTarget.naturalHeight;

        const newAspect = naturalWidth / naturalHeight;

        if (isBetween(newAspect, 0.8, 1.2)) {
            setWidthHeightRatio(1);
            return;
        }

        setWidthHeightRatio(newAspect)
    }

    return (
        <Image
            width={internalWidth}
            height={internalHeight}
            alt={title}
            src={src}
            key={src + description}
            style={coverImageStyle}
            placeholder="blur"
            blurDataURL="/image_placeholder.jpg"
            className={style.cover}
            onLoad={handleLoad}
        />
    )
}

export default ResourceEntryCardCoverImage