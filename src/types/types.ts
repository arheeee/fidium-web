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
  __typename: "heroBlock_Entry";
  id: string;
  heroButtonLabel: string;
  heroHeader: string;
  heroIcon: HeroIcon[];
  heroImage: HeroImage[];
  heroMobileImage: HeroMobileImage[];
  heroFieldPlaceholder: string;
  heroSubHeader: string;
  heroHideCheckAvailability: boolean;
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
  __typename: "subHeroBlock_Entry";
  id: string;
  subHeroButtonLabel: string;
  subHeroHeader: string;
  subHeroIcon: SubHeroIcon[];
  subHeroImage: SubHeroImage[];
  subHeroMobileImage: SubHeroMobileImage[];
  subHeroFieldPlaceholder: string;
  subHeroSubHeader: string;
  subHeroHideCheckAvailability: boolean;
  subHeroBackgroundColor: string;
};

export type TestimonialHtml5Video = {
  mimeType: string;
  title: string;
  url: string;
};

export type TestimonialAward = {
  alt: string | null;
  url: string;
  title: string;
};

export type TestimonialModule = {
  title: string;
  id: string;
  testimonialName: string;
  testimonialLocation: string;
  testimonialContent: string;
};

export type TestimonialBlock = {
  __typename: "testimonialBlock_Entry";
  id: string;
  addTestimonialVideo: boolean;
  testimonialYoutubeId: string | null;
  testimonialVimeoId: string | null;
  testimonialVideoType: string;
  testimonialSubHeader: string;
  testimonialHtml5Video: TestimonialHtml5Video[];
  testimonialHideIcon: boolean;
  testimonialHeader: string;
  testimonialAwards: TestimonialAward[];
  testimonialModule: TestimonialModule[];
};

export type TextBlock = {
  __typename: "textBlock_Entry";
  id: string;
  introductionText: string;
};

export type PageBlock = HeroBlock | SubHeroBlock | TextBlock | TestimonialBlock;

export type HomePageEntry = {
  id: string;
  title: string;
  pageBlocks: PageBlock[];
};

export type HomePageData = {
  entries: HomePageEntry[];
};

export type AccordionItemProps = {
  header: string;
  content: string;
};

export type AccordionButton = {
  buttonUrl: string;
  buttonType: string;
  buttonLabel: string;
  openInNewTab: boolean;
};

export type Accordion = {
  accordionSetHeader: string;
  accordionSetContent: string;
};

export type FaqPageEntryData = {
  pagesEntries: FaqPageEntry[];
};

export type FaqPageEntry = {
  title: string;
  pageBlocks: FaqPageBlocks[];
};

export type FaqPageBlocks = {
  accordionHeader: string;
  accordionSubHeader: string | null;
  accordionButton: AccordionButton;
  accordionGroup: Accordion[];
};

export type MapLocation = {
  id: string;
  title: string;
  locationStateCode: string | null;
};

export type MapLocationEntry = {
  locationsEntries: MapLocation[];
};
