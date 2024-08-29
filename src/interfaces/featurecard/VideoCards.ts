export interface VideoCardsEntries {
    entries: VideoCardsEntry[]
  }
  
  export interface VideoCardsEntry {
    __typename: string
    id: string
    pageBlocks: VideoCardsPageBlock[]
  }
  
  export interface VideoCardsPageBlock {
    __typename: string
    id?: string
    videoCard?: VideoCard[]
  }
  
  export interface VideoCard {
    __typename: string
    id: string
    videoCardHeading: string
    videoCardSubHeader: string
    videoCardSubText: string
    videoCardType: string
    videoCardVimeoId?: string
    videoCardYoutubeId?: string
    videoCardHtml5Video?: VideoCardHtml5Video[]
}

export interface VideoCardHtml5Video {
  id: string
  url?: string
  mimeType: string
  title: string
}
