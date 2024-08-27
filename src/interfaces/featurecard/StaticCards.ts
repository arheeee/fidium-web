 
  export interface StaticCardsEntries {
    entries: StaticCardsEntry[]
  }
  
  export interface StaticCardsEntry {
    __typename: string
    id: string
    pageBlocks: StaticCardsPageBlock[]
  }
  
  export interface StaticCardsPageBlock {
    __typename: string
    id?: string
    staticFeatureCtaContent?: string
    staticFeatureCtaButton?: StaticFeatureCtaButton[]
    staticFeatureCardSubHeader?: string
    staticFeatureCardHeader?: string
    staticFeatureCardAddCta?: boolean
    staticFeatureCard?: StaticFeatureCard[]
  }
  
  export interface StaticFeatureCtaButton {
    __typename: string
    id: string
    buttonUrl: any
    buttonType: string
    buttonLabel: string
  }
  
  export interface StaticFeatureCard {
    __typename: string
    id: string
    staticFeatureHeader: string
    staticFeatureIcon: StaticFeatureIcon[]
    staticFeatureDescription: string
  }
  
  export interface StaticFeatureIcon {
    __typename: string
    url: string
    title: string
    alt: any
  }
  
  