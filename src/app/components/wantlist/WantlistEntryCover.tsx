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

const WantlistEntryCover = ({src, width, title, format, qunatity, descriptions}: Props) => {
    // const coverSize = Math.ceil(Number(size)/10 * 8)
    // const formatSize = coverSize

    const columns = 10;
    const coverParts = 7;
    const onePart = Math.ceil(width/columns)

    const coverSize = Math.ceil(width/columns * coverParts)
    const coverGridColumn = `${columns - coverParts + 1} / ${columns}`

    const cassete = "https://t4.ftcdn.net/jpg/02/29/43/35/360_F_229433573_ZIGWdQvJmqBG66DbyAaxmRJzW2uYhzf6.jpg"
    const vinyl = "https://deepgrooves.eu/wp-content/uploads/2020/08/Black-8722-1.png"
    const cd = "https://www.freepnglogos.com/uploads/compact-disc-png-logo/compact-disk-png-image-logo-4.png"

    const formatImg = format === "Vinyl" ? vinyl : cd

  return (
    <>
        <div style={
            {height: coverSize, backgroundColor: "#dedede", borderRadius: "8px 8px 0 0", display: "grid",
            gridTemplateColumns: `repeat(9, ${onePart}px)`}
            } className={style.cover_container}>
            <div className={style.cover_desc}><strong>{descriptions[0]}</strong></div>
            {qunatity > 1 && <div className={style.cover_quantity}><Text italic strong>x{qunatity}</Text></div>}
            <img height={coverSize} src={formatImg} alt="format" className={style.cover_format} />
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