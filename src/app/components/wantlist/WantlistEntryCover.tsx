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

  return (
    <>
        <div style={
            {height: coverSize, backgroundColor: "#dedede", borderRadius: "8px 8px 0 0", display: "grid",
            gridTemplateColumns: `repeat(9, ${onePart}px)`}
            } className={style.cover_container}>
            <div className={style.cover_desc}><strong>{descriptions[0]}</strong></div>
            {qunatity > 1 && <div className={style.cover_quantity}><Text italic strong>x{qunatity}</Text></div>}
            <Image height={coverSize} width={coverSize} src={formatImg} alt="format" className={style.cover_format} />
            <Image width={coverSize} height={coverSize} alt={title} src={src}
                style={{borderRadius: 0, borderTopRightRadius: "8px"
            }}
                placeholder="blur"
                blurDataURL="/image_placeholder.jpg"
                className={style.cover}
            />
        </div>
          
    </>
  )
}

export default WantlistEntryCover