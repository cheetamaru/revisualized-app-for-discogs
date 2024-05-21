import Image from "next/image";

type Props = {
    src: string;
    size: number;
    format: string;
    title: string
}

const WantlistEntryCover = ({src, size, title, format}: Props) => {
    const coverSize = Math.ceil(Number(size)/10 * 8)
    const formatSize = coverSize

    const cassete = "https://t4.ftcdn.net/jpg/02/29/43/35/360_F_229433573_ZIGWdQvJmqBG66DbyAaxmRJzW2uYhzf6.jpg"
    const vinyl = "https://deepgrooves.eu/wp-content/uploads/2020/08/Black-8722-1.png"
    const cd = "https://www.freepnglogos.com/uploads/compact-disc-png-logo/compact-disk-png-image-logo-4.png"

    const formatImg = format === "Vinyl" ? vinyl : cd

  return (
    <>
        <div style={{height: coverSize, backgroundColor: "#dedede", borderRadius: "8px 8px 0 0"}}>
            <img height={formatSize} src={formatImg} alt="format" />
            <Image width={coverSize} height={coverSize} alt={title} src={src}
                style={{position: 'absolute', right: '-1px', borderRadius: 0, borderTopRightRadius: "8px"}}
                placeholder="blur"
                blurDataURL="/image_placeholder.jpg"
            />
        </div>
          
    </>
  )
}

export default WantlistEntryCover