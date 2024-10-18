export interface Reddit {
    kind: string;
    data: RedditData;
}

export interface RedditData {
    after:      string;
    dist:       number;
    modhash:    string;
    geo_filter: null;
    children:   SubredditChildren[];
    before:     null;
}

export interface SubredditChildren {
    kind: string;
    data: SubredditChildData;
}

export interface SubredditChildData {
    subreddit:                     string;
    selftext:                      string;
    author_fullname:               string;
    title:                         string;
    downs:                         number;
    name:                          string;
    upvote_ratio:                  number;
    ups:                           number;
    score:                         number;
    thumbnail:                     string;
    created:                       number;
    subreddit_id:                  string;
    author:                        string;
    num_comments:                  number;
    permalink:                     string;
    url:                           string;
    subreddit_subscribers:         number;
    preview?:                      Preview;
}

export interface AuthorFlairRichtext {
    a?: string;
    e:  string;
    u?: string;
    t?: string;
}

export enum FlairTextColor {
    Dark = "dark",
    Light = "light",
}

export enum AuthorFlairType {
    Richtext = "richtext",
    Text = "text",
}



export interface GalleryData {
    items: Item[];
}

export interface Item {
    media_id: string;
    id:       number;
}

export interface Gildings {
}

export interface LinkFlairRichtext {
    e: AuthorFlairType;
    t: string;
}

export interface Media {
    reddit_video: RedditVideo;
}

export interface RedditVideo {
    bitrate_kbps:       number;
    fallback_url:       string;
    has_audio:          boolean;
    height:             number;
    width:              number;
    scrubber_media_url: string;
    dash_url:           string;
    duration:           number;
    hls_url:            string;
    is_gif:             boolean;
    transcoding_status: string;
}

export interface MediaMetadatum {
    status: string;
    e:      string;
    m:      string;
    p:      S[];
    s:      S;
    id:     string;
}

export interface S {
    y: number;
    x: number;
    u: string;
}

export enum WhitelistStatus {
    AllAds = "all_ads",
}

export enum PostHint {
    HostedVideo = "hosted:video",
    Image = "image",
}

export interface Preview {
    images:  Image[];
    enabled: boolean;
}

export interface Image {
    source:      Source;
    resolutions: Source[];
    variants:    Gildings;
    id:          string;
}

export interface Source {
    url:    string;
    width:  number;
    height: number;
}
