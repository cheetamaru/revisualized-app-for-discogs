import { DiscogsWantlistParams } from "@/shared/types/discogs/wantlist/DiscogsWantlistParams"
import { GetWantlistParams } from "../types/GetWantlistParams"
import { DiscogsWantlistEntry } from "@/shared/types/discogs/wantlist/DiscogsWantlistEntry"
import { WantlistEntryType } from "../types/WantlistEntryType"
import { MusicInfoApiAdapterDomain } from "@/shared/domain/musicInfo/MusicInfoApiAdapterDomain";

const {
    transformToMusicArtist,
    transformToMusicLabel,
    transformToMusicEntryFormat,
} = MusicInfoApiAdapterDomain;

const transformGetterParamsToApi = (params: GetWantlistParams): DiscogsWantlistParams => {
    return {
        page: params.page,
        per_page: params.perPage,
        sort: params.sort,
        sort_order: params.sortOrder
    }
}

const transformToWantlistEntry = (entry: DiscogsWantlistEntry): WantlistEntryType => {
    return {
        resourceId: entry.basic_information.id,
        title: entry.basic_information.title,
        rating: entry.rating,
        year: entry.basic_information.year,
        thumbCoverUrl: entry.basic_information.thumb,
        fullCoverUrl: entry.basic_information.cover_image,
        formats: entry.basic_information.formats.map(transformToMusicEntryFormat),
        mainFormatName: entry.basic_information.formats[0].name,
        labels: entry.basic_information.labels.map(transformToMusicLabel),
        mainLabelName: entry.basic_information.labels[0].name,
        artists: entry.basic_information.artists.map(transformToMusicArtist),
        mainArtistName: entry.basic_information.artists[0].name,
    }
}

export const WantlistApiAdapterDomain = {
    transformGetterParamsToApi,
    transformToWantlistEntry
}
