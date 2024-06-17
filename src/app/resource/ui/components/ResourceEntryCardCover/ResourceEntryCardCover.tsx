import style from "@/app/resource/ui/components/style/resourceEntryCard.module.css"
import Text from 'antd/es/typography/Text'
import { MusicEntryFormat } from "@/shared/types/musicInfo/MusicEntryFormat";
import { ResourceFormatImageDomain } from "../../../domain/ResourceFormatImageDomain";
import ResourceEntryCardCoverImage from "./ResourceEntryCardCoverImage";
import ResourceEntryCardFormatImage from "./ResourceEntryCardFormatImage";
import { ResourceEntryCardCoverDomain } from "@/app/resource/domain/ResourceEntryCardCoverDomain";

type Props = {
    src: string;
    coverImageHeight: number;
    format: MusicEntryFormat;
    title: string;
}

const { getFormatImageSrc } = ResourceFormatImageDomain;
const { getCoverGridOptions, getAllowedDescription } = ResourceEntryCardCoverDomain;

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

const ResourceEntryCardCover = ({src, coverImageHeight, title, format}: Props) => {
    const { name: formatName, quantity, descriptions } = format;

    const { onePart, coverSize } = getCoverGridOptions(coverImageHeight)
    const formatImg = getFormatImageSrc(formatName);
    const allowedDescription = getAllowedDescription(descriptions);

    const isDescriptionShown = Boolean(formatImg) || formatName === "File"
    const isQuantityShown = Boolean(formatImg && quantity > 1)

    return (
    <>
        <div 
            style={
                {
                    height: coverSize,
                    gridTemplateColumns: `repeat(9, ${onePart}px)`,
                    backgroundColor: "#dedede",
                    borderRadius: "8px 8px 0 0",
                    display: "grid",
                }
            } 
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
