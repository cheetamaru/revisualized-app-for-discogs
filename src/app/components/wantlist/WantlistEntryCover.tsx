import Image from "next/image";

type Props = {
    src: string;
    size: number;
    format: string;
    title: string
}

const WantlistEntryCover = ({src, size, title}: Props) => {
    const coverSize = Math.ceil(Number(size)/10 * 7)
    const formatSize = coverSize

    const cassete = "https://t4.ftcdn.net/jpg/02/29/43/35/360_F_229433573_ZIGWdQvJmqBG66DbyAaxmRJzW2uYhzf6.jpg"
    const vinyl = "https://deepgrooves.eu/wp-content/uploads/2020/08/Black-8722-1.png"

  return (
    <>
        <div style={{height: coverSize, backgroundColor: "#dedede", borderRadius: "8px 8px 0 0"}}>
            <img height={formatSize} src={vinyl} alt="format" />
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