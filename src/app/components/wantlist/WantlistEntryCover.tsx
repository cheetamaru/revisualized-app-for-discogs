import Image from "next/image";
import style from "./component.module.css"

type Props = {
    src: string;
    size: number;
    format: string;
    title: string
}

const WantlistEntryCover = ({src, size, title, format}: Props) => {
    // const coverSize = Math.ceil(Number(size)/10 * 8)
    // const formatSize = coverSize

    const cassete = "https://t4.ftcdn.net/jpg/02/29/43/35/360_F_229433573_ZIGWdQvJmqBG66DbyAaxmRJzW2uYhzf6.jpg"
    const vinyl = "https://deepgrooves.eu/wp-content/uploads/2020/08/Black-8722-1.png"
    const cd = "https://www.freepnglogos.com/uploads/compact-disc-png-logo/compact-disk-png-image-logo-4.png"

    const formatImg = format === "Vinyl" ? vinyl : cd

  return (
    <>
        <div style={{height: size, backgroundColor: "#dedede", borderRadius: "8px 8px 0 0", display: "grid"}} className={style.cover_container}>
            <img height={size} src={formatImg} alt="format" className={style.cover_format} />
            <Image width={size} height={size} alt={title} src={src}
                style={{borderRadius: 0, borderTopRightRadius: "8px"}}
                placeholder="blur"
                blurDataURL="/image_placeholder.jpg"
                className={style.cover}
            />
        </div>
          
    </>
  )
}

export default WantlistEntryCover