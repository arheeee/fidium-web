import gql from "graphql-tag";

//Query faqs page
export const getFaqPageQuery = gql`
  {
    pagesEntries(slug: "faqs") {
      ... on pageEditor_Entry {
        id
        slug
        title
        pageBlocks {
          ... on accordionBlock_Entry {
            id
            title
            accordionHeader
            accordionSubHeader
            accordionButton {
              ... on buttonBlock_Entry {
                id
                openInNewTab
                buttonUrl
                buttonType
                buttonLabel
              }
            }
            accordionGroup {
              ... on accordionSet_Entry {
                id
                accordionSetContent
                accordionSetHeader
              }
            }
          }
        }
      }
    }
  }
`;

//heroblock
export const getHomePageQuery = gql`
  query HomePageQuery {
    entries(section: "homePage") {
      ... on pageEditor_Entry {
        id
        title
        pageBlocks {
          ... on heroBlock_Entry {
            __typename
            id
            heroButtonLabel
            heroHeader
            heroIcon {
              url
              title
              alt
            }
            heroImage {
              url
              title
              alt
            }
            heroMobileImage {
              url
              title
              alt
            }
            heroFieldPlaceholder
            heroSubHeader
            heroHideCheckAvailability
          }
          ... on subHeroBlock_Entry {
            __typename
            id
            subHeroButtonLabel
            subHeroHeader
            subHeroIcon {
              url
              title
              alt
            }
            subHeroImage {
              url
              title
              alt
            }
            subHeroMobileImage {
              url
              title
              alt
            }
            subHeroFieldPlaceholder
            subHeroSubHeader
            subHeroHideCheckAvailability
            subHeroBackgroundColor
          }
          ... on textBlock_Entry {
            __typename
            id
            introductionText
          }
        }
      }
    }
  }
`;

//footer
export const getFooterQuery = gql`
  query FooterQuery {
  globalSets {
    ... on footer_GlobalSet {
      id
      name
      footerSocialItem {
        ... on footerSocialItemSet_Entry {
          id
          footerSocialUrl
          footerSocialOpenInNewtab
        }
      }
      footerNavItem {
        ... on footerNavItemSet_Entry {
          id
          footerOpenInNewTab
          footerMenuUrl
          footerMenuLabel
        }
      }
      footerLegalLinks
      footerDisclaimer
      footerCopyright
    }
  }
}
`;

export const TESTIMONIALS_QUERY = gql`
  query HomePageQuery {
    entries(section: "homePage") {
      ... on pageEditor_Entry {
        id
        pageBlocks {
          ... on testimonialBlock_Entry {
            id
            addTestimonialVideo
            testimonialYoutubeId
            testimonialVimeoId
            testimonialVideoType
            testimonialSubHeader
            testimonialHtml5Video {
              mimeType
              title
              url
            }
            testimonialHideIcon
            testimonialHeader
            testimonialAwards {
              alt
              url
              title
            }
            testimonialModule {
              title
              ... on testimonialEditor_Entry {
                id
                testimonialName
                testimonialLocation
                testimonialContent
              }
            }
          }
        }
      }
    }
  }
`;

// Expandible cards
export const getExpandibleCards = gql`
  {
    entries(section: "homePage") {
      ... on pageEditor_Entry {
        id
        pageBlocks {
          ... on featureCardBlock_Entry {
            id
            featureCard {
              ... on featureCardSet_Entry {
                id
                featureCardHeader
                featureCardImage {
                  alt
                  title
                  url
                }
                featureCardEyebrowImage {
                  url
                  title
                  alt
                }
                featureCardOpenLabel
                featureCardListBlock {
                  ... on featureSet_Entry {
                    id
                    featureItem
                  }
                }
                featureCardContent
                featureCardCloseLabel
                featureCardExpandable
                featureCardButton {
                  ... on buttonBlock_Entry {
                    id
                    buttonLabel
                    buttonType
                    buttonUrl
                  }
                }
                featureCardEyebrowType
                featureCardEyebrowText
                featureCardEyebrowImage {
                  url
                  title
                  alt
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Static cards
export const getStaticCards = gql`
  {
    entries(section: "homePage") {
      ... on pageEditor_Entry {
        id
        pageBlocks {
          ... on staticFeatureCardBlock_Entry {
            id
            staticFeatureCtaContent
            staticFeatureCtaButton {
              ... on buttonBlock_Entry {
                id
                buttonUrl
                buttonType
                buttonLabel
              }
            }
            staticFeatureCardSubHeader
            staticFeatureCardHeader
            staticFeatureCardAddCta
            staticFeatureCard {
              ... on staticFeatureSet_Entry {
                id
                staticFeatureHeader
                staticFeatureIcon {
                  url
                  title
                  alt
                }
                staticFeatureDescription
              }
            }
          }
        }
      }
    }
  }
`;

// video cards
export const GET_VIDEO_CARDS = gql`
  {
    entries(section: "homePage") {
      ... on pageEditor_Entry {
        id
        pageBlocks {
          ... on videoCardBlock_Entry {
            id
            videoCard {
              ... on videoCardSet_Entry {
                id
                videoCardHeading
                videoCardSubHeader
                videoCardSubText
                videoCardType
                videoCardVimeoId
                videoCardYoutubeId
              }
            }
          }
        }
      }
    }
  }
`;
