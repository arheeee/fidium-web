export interface ExpandingCardsEntries {
    entries: ExpandingCardsEntry[]
  }
  
  export interface ExpandingCardsEntry {
    __typename: string
    id: string
    pageBlocks: ExpandableCardsPageBlock[]
  }
  
  export interface ExpandableCardsPageBlock {
    __typename: string
    id?: string
    featureCard?: FeatureCardElem[]
  }
  
  export interface FeatureCardElem {
    __typename: string
    id: string
    featureCardHeader: string
    featureCardImage: FeatureCardImage[]
    featureCardEyebrowImage: FeatureCardEyebrowImage[]
    featureCardOpenLabel: string
    featureCardListBlock: FeatureCardListBlock[]
    featureCardContent: string
    featureCardCloseLabel: string
    featureCardExpandable: boolean
    featureCardButton: FeatureCardButton[]
    featureCardEyebrowType: string
    featureCardEyebrowText: string
  }
  
  export interface FeatureCardImage {
    __typename: string
    alt: any
    title: string
    url: string
  }
  
  export interface FeatureCardEyebrowImage {
    __typename: string
    url: string
    title: string
    alt: any
  }
  
  export interface FeatureCardListBlock {
    __typename: string
    id: string
    featureItem: string
  }
  
  export interface FeatureCardButton {
    __typename: string
    id: string
    buttonLabel: string
    buttonType: string
    buttonUrl: any
  }
  