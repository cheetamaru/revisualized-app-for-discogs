import Image from "next/image";
import style from "./component.module.css"
import Text from 'antd/es/typography/Text'

type Props = {
    src: string;
    width: number;
    format: string;
    title: string;
    qunatity: number;
    descriptions: string[];
}

const cassetteSrc = "/format/cassette.webp"
const vinylSrc ="/format/vinyl.webp"
const cdSrc = "/format/cd.webp"

const formatSrcMapper = new Map([
    ["Vinyl", vinylSrc],
    ["Cassette", cassetteSrc],
    ["CD", cdSrc],
    ["CDr", cdSrc],
])

const getFormatSrc = (format: string) => {
    if (formatSrcMapper.has(format)) {
        return formatSrcMapper.get(format)
    }

    return;
}

const WantlistEntryCover = ({src, width, title, format, qunatity, descriptions}: Props) => {
    // const coverSize = Math.ceil(Number(size)/10 * 8)
    // const formatSize = coverSize

    const columns = 10;
    const coverParts = 7;
    const onePart = Math.ceil(width/columns)

    const coverSize = Math.ceil(width/columns * coverParts)
    const coverGridColumn = `${columns - coverParts + 1} / ${columns}`

    const formatImg = getFormatSrc(format) || "";

    const allowedDescription = descriptions[0].length <= 3 ? descriptions[0] : undefined
  return (
    <>
        <div style={
            {height: coverSize, backgroundColor: "#dedede", borderRadius: "8px 8px 0 0", display: "grid",
            gridTemplateColumns: `repeat(9, ${onePart}px)`}
            } className={style.cover_container}>
            { formatImg && <div className={style.cover_desc}><strong>{allowedDescription}</strong></div>}
            { formatImg && qunatity > 1 && <div className={style.cover_quantity} style={{top: coverSize - 24}}><Text italic strong>x{qunatity}</Text></div>}

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
                            {format}
                        </div>
           
            }

            { src
                ?
                <Image width={coverSize} height={coverSize} alt={title} src={src}
                    key={src + allowedDescription}
                    style={{
                        borderRadius: 0,
                        borderTopRightRadius: "8px"
                    }}
                    placeholder="blur"
                    blurDataURL="/image_placeholder.jpg"
                    className={style.cover}
                />
                :
                <Image src="/image_placeholder.jpg" width={coverSize} height={coverSize} alt="no image" 
                    style={{opacity: 0.9}}
                    className={style.cover}
                />
             }

        </div>
          
    </>
  )
}

export default WantlistEntryCover