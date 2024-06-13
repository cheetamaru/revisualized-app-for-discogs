const cassetteSrc = "/format/cassette.webp"
const vinylSrc ="/format/vinyl.webp"
const cdSrc = "/format/cd.webp"

const formatSrcMapper = new Map([
    ["Vinyl", vinylSrc],
    ["Cassette", cassetteSrc],
    ["CD", cdSrc],
    ["CDr", cdSrc],
])

const getFormatImageSrc = (format: string): string | undefined => {
    if (formatSrcMapper.has(format)) {
        return formatSrcMapper.get(format)
    }

    return;
}

export const ResourceFormatImageDomain = {
    getFormatImageSrc,
}
