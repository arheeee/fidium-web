import gql from "graphql-tag";

export const getFooterQuery = gql`
  query FooterQuery {
    globalSets {
      ... on footer_GlobalSet {
        __typename
        id
        name
        footerSocialItem {
          ... on footerSocialItemSet_Entry {
            id
            footerSocialIcon
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
