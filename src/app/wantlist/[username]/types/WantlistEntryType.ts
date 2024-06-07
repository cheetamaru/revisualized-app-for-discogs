type WantlistEntryFormat = {
    text: string;
    qty: number;
    descriptions: string[];
    name: string;
}

type MusicLabel = {
    resource_url: string;
    entity_type: string;
    catno: string;
    id: number;
    name: string;
}

type MusicArtist = {
    anv: string;
    id: number;
    join: string;
    name: string;
    resource_url: string;
    role: string;
    tracks: string;
}

export type WantlistEntryType = {
    resourceId: number;
    rating: number;
    // formats: WantlistEntryFormat[],
    // mainFormat: string;
    // thumbImgUrl: string;
    // fullImgUrl: string;
    // title: string;
    // labels: MusicLabel[];
    // mainLabel: MusicLabel;
    // year: number;
    // artists: MusicArtist[];
    // mainArtist: MusicArtist;
}
