/* 
  This is where all the data types will be stored and used throughout the app
*/

export type HeroImage = {
    url: string;
    title: string;
    alt: string | null;
  };
  
  export type HeroIcon = {
    url: string;
    title: string;
    alt: string | null;
  };
  
  export type HeroMobileImage = {
    url: string;
    title: string;
    alt: string | null;
  };
  
  export type HeroBlock = {
    __typename: 'heroBlock_Entry';
    id: string;
    heroButtonLabel: string;
    heroHeader: string;
    heroIcon: HeroIcon[];
    heroImage: HeroImage[];
    heroMobileImage: HeroMobileImage[];
    heroFieldPlaceholder: string;
    heroSubHeader: string;
    heroHideCheckAvailability:boolean;
  };
  
  export type SubHeroImage = {
    url: string;
    title: string;
    alt: string | null;
  };
  
  export type SubHeroIcon = {
    url: string;
    title: string;
    alt: string | null;
  };
  
  export type SubHeroMobileImage = {
    url: string;
    title: string;
    alt: string | null;
  };
  
  export type SubHeroBlock = {
    __typename: 'subHeroBlock_Entry';
    id: string;
    subHeroButtonLabel: string;
    subHeroHeader: string;
    subHeroIcon: SubHeroIcon[];
    subHeroImage: SubHeroImage[];
    subHeroMobileImage: SubHeroMobileImage[];
    subHeroFieldPlaceholder: string;
    subHeroSubHeader: string;
    subHeroHideCheckAvailability:boolean;
    subHeroBackgroundColor: string;
  };
  
  export type TextBlock = {
    __typename: 'textBlock_Entry';
    id: string;
    introductionText: string;
  };
  
  export type PageBlock = HeroBlock | SubHeroBlock | TextBlock;
  
  export type HomePageEntry = {
    id: string;
    pageBlocks: PageBlock[];
  };
  
  export type HomePageData = {
    entries: HomePageEntry[];
  };