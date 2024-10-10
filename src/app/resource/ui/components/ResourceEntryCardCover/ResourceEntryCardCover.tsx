import style from "@/app/resource/ui/components/style/resourceEntryCard.module.css"
import Text from 'antd/es/typography/Text'
import { MusicEntryFormat } from "@/shared/types/musicInfo/MusicEntryFormat";
import { ResourceFormatImageDomain } from "../../../domain/ResourceFormatImageDomain";
import ResourceEntryCardCoverImage from "./ResourceEntryCardCoverImage";
import ResourceEntryCardFormatImage from "./ResourceEntryCardFormatImage";
import { ResourceEntryCardCoverDomain } from "@/app/resource/domain/ResourceEntryCardCoverDomain";
import SkeletonImage from "antd/es/skeleton/Image";

type Props = {
    src: string;
    coverImageHeight: number;
    format: MusicEntryFormat;
    title: string;
    loading?: boolean;
}

const { getFormatImageSrc, isFileFormat } = ResourceFormatImageDomain;
const { getCoverGridOptions, getAllowedDescription, getContainerStyle } = ResourceEntryCardCoverDomain;

const getDescription = (isShown: boolean, description?: string) => {
    return isShown && 
        <div className={style.cover_desc}>
            <strong>
                {description}
            </strong>
        </div>
}

const getQuantity = (isShown: boolean, coverSize: number, quantity?: number,) => {
    return isShown && 
        <div className={style.cover_quantity} style={{top: coverSize - 24}}>
            <Text italic strong>
                x{quantity}
            </Text>
        </div>
}

const ResourceEntryCardCover = ({src, coverImageHeight, title, format, loading}: Props) => {
    const { name: formatName, quantity, descriptions } = format;

    const { onePart, coverSize } = getCoverGridOptions(coverImageHeight)
    const formatImg = getFormatImageSrc(formatName);
    const allowedDescription = getAllowedDescription(descriptions);

    const isDescriptionShown = Boolean(formatImg) || isFileFormat(formatName)
    const isQuantityShown = Boolean(formatImg && quantity > 1)

    if (loading) {
        return <div 
            style={getContainerStyle({ onePart, coverSize })} 
            className={style.cover_container}
        >
            <SkeletonImage active />
        </div>
    }

    return (
    <>
        <div 
            style={getContainerStyle({ onePart, coverSize })} 
            className={style.cover_container}
        >
            { getDescription(isDescriptionShown, allowedDescription)}
            { getQuantity(isQuantityShown, coverSize, quantity) }

            <ResourceEntryCardFormatImage
                formatName={formatName}
                formatImg={formatImg}
                coverSize={coverSize}
            />

            <ResourceEntryCardCoverImage
                src={src}
                coverSize={coverSize}
                title={title}
                description={allowedDescription}
            />
        </div> 
    </>
    )
}

export default ResourceEntryCardCover;
