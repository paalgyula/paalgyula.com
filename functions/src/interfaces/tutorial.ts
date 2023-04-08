export interface ITutorialListItem {
    name: string
    slug: string
    id: string
    link: string;
}

export interface ITutorialsResponse {
    data: ITutorialListItem[]
}
