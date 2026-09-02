import { resourcePageSortAdapter } from "@/app/resourcePage/adapters/resourcePageSortAdapter";
import { MusicInfoApiAdapterDomain } from "@/shared/domain/musicInfo/MusicInfoApiAdapterDomain";
import { DiscogsCollectionEntry } from "@/shared/types/discogs/collection/DiscogsCollectionEntry";
import { DiscogsCollectionParams } from "@/shared/types/discogs/collection/DiscogsCollectionParams";
import { CollectionEntryType } from "../types/CollectionEntryType";
import { GetCollectionParams } from "../types/GetCollectionParams";

const { getApiSort } = resourcePageSortAdapter;
const {
    transformToMusicArtist,
    transformToMusicEntryFormat,
    transformToMusicLabel,
} = MusicInfoApiAdapterDomain;

const transformGetterParamsToApi = (params: GetCollectionParams): DiscogsCollectionParams => {
    const { sort, sort_order } = getApiSort(params.sort);

    return {
        page: params.page,
        per_page: params.perPage,
        sort,
        sort_order,
    };
};

const transformToCollectionEntry = (entry: DiscogsCollectionEntry): CollectionEntryType => {
    const info = entry.basic_information;
    const formats = info.formats || [];
    const labels = info.labels || [];
    const artists = info.artists || [];
    const mainFormat = formats[0];
    const mainLabel = labels[0];
    const mainArtist = artists[0];
    const fallbackFormat = { name: "Unknown", qty: 1, descriptions: [] };

    return {
        resourceKey: `${info.id}-${entry.instance_id}`,
        resourceId: info.id,
        title: info.title,
        rating: entry.rating,
        year: info.year,
        thumbCoverUrl: info.thumb,
        fullCoverUrl: info.cover_image,
        formats: formats.map(transformToMusicEntryFormat),
        mainFormat: transformToMusicEntryFormat(mainFormat || fallbackFormat),
        mainFormatName: mainFormat?.name || "Unknown",
        labels: labels.map(transformToMusicLabel),
        mainLabelName: mainLabel?.name || "Unknown",
        artists: artists.map(transformToMusicArtist),
        mainArtistName: mainArtist?.name || "Unknown Artist",
    };
};

export const CollectionApiAdapterDomain = {
    transformGetterParamsToApi,
    transformToCollectionEntry,
};
