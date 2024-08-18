import gql from "graphql-tag";

//FAQ
export const GET_ALL_FAQ = gql`
{
    faqsEntries {
        ... on faqs_faq_Entry {
            id
            title
            bodyContent {
                ... on bodyContent_richText_BlockType {
                    id
                    richText
                }
            }
        }
    }
}`;

//heroblock
export const HOMEPAGE_QUERY = gql`
  query HomePageQuery {
    entries(section: "homePage") {
      ... on general_Entry {
        id
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