"use client"
import Image from "next/image";
import style from "@/app/resource/ui/components/style/resourceEntryCard.module.css"
import { resourceEntryCardStyle } from "../style/resourceEntryCardStyles";
import { useResourceEntryCardCover } from "@/app/resource/hooks/useResourceEntryCardCover";

type Props = {
    src?: string;
    coverSize: number;
    title: string;
    description?: string;
}

const { coverImagePlaceholderStyle, coverImageStyle } = resourceEntryCardStyle;

const ResourceEntryCardCoverImage = ({ src, coverSize, title, description }: Props) => {
    const {
        internalWidth,
        internalHeight,
        handleLoad,
    } = useResourceEntryCardCover(coverSize)

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

export default ResourceEntryCardCoverImage;
