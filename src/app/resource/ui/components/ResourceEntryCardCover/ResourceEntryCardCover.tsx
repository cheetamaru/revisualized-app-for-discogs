import Image from "next/image";
import style from "@/app/resource/ui/components/style/resourceEntryCard.module.css"
import Text from 'antd/es/typography/Text'
import { MusicEntryFormat } from "@/shared/types/musicInfo/MusicEntryFormat";
import { ResourceFormatImageDomain } from "../../../domain/ResourceFormatImageDomain";
import ResourceEntryCardCoverImage from "./ResourceEntryCardCoverImage";

type Props = {
    src: string;
    coverImageHeight: number;
    format: MusicEntryFormat;
    title: string;
}

const { getFormatImageSrc } = ResourceFormatImageDomain;

const ResourceEntryCardCover = ({src, coverImageHeight, title, format}: Props) => {
    const { name: formatName, quantity, descriptions } = format;

    const columns = 10;
    const coverParts = 7;
    const onePart = Math.ceil(coverImageHeight/columns)

    const coverSize = Math.ceil(coverImageHeight/columns * coverParts)
    const coverGridColumn = `${columns - coverParts + 1} / ${columns}`

    const formatImg = getFormatImageSrc(formatName);

    const allowedDescription = descriptions[0]?.length <= 3 ? descriptions[0] : undefined

    const isDescriptionShown = Boolean(formatImg) || formatName === "File"
    const isQuantityShown = Boolean(formatImg && quantity > 1)

  return (
    <>
        <div 
            style={
                {
                    height: coverSize,
                    backgroundColor: "#dedede",
                    borderRadius: "8px 8px 0 0",
                    display: "grid",
                    gridTemplateColumns: `repeat(9, ${onePart}px)`
                }
            } 
            className={style.cover_container}
        >
            { isDescriptionShown && <div className={style.cover_desc}><strong>{allowedDescription}</strong></div>}
            { isQuantityShown && <div className={style.cover_quantity} style={{top: coverSize - 24}}><Text italic strong>x{quantity}</Text></div>}

            {
                formatImg
                    ?
                        <Image height={coverSize} width={coverSize} src={formatImg} alt="format" className={style.cover_format} />
                    :
                        <div
                            style={{
                                height: coverSize,
                                width: coverSize,
                                writingMode: "vertical-lr",
                                textOrientation: "upright",
                                wordWrap: "break-word",
                                overflowWrap: "break-word",
                                textAlign: "center",
                                paddingLeft: 6,
                            }}
                            className={style.cover_format}
                        >
                            {formatName}
                        </div>
           
            }

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

export default ResourceEntryCardCover