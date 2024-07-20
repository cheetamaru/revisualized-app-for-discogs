import { DiscogsArtistShort } from "@/shared/types/discogs/artist/DiscogsArtistShort"
import { DiscogsEntryFormat } from "@/shared/types/discogs/format/DiscogsEntryFormat"
import { DiscogsLabelShort } from "@/shared/types/discogs/label/DiscogsLabelShort"
import { MusicArtistShort } from "@/shared/types/musicInfo/MusicArtistShort"
import { MusicEntryFormat } from "@/shared/types/musicInfo/MusicEntryFormat"
import { MusicLabelShort } from "@/shared/types/musicInfo/MusicLabelShort"
import { normalizeString } from "@/shared/utils/normalizers/normalizeString"

const transformToMusicLabel = (label: DiscogsLabelShort): MusicLabelShort => {
    return {
        id: label.id,
        name: label.name,
        entityTypeName: label.entity_type_name,
    }
}

const transformToMusicArtist = (artist: DiscogsArtistShort): MusicArtistShort => {
    return {
        id: artist.id,
        name: artist.name,
        artistNameVariation: artist.anv,
        joinSeparatorWithTheNext: artist.join,
    }
}

const transformToMusicEntryFormat = (format: DiscogsEntryFormat): MusicEntryFormat => {
    return {
        name: format.name,
        quantity: format.qty,
        descriptions: format.descriptions,
        additionalText: normalizeString(format.text),
    }
}

export const MusicInfoApiAdapterDomain = {
    transformToMusicLabel,
    transformToMusicArtist,
    transformToMusicEntryFormat,
}
