// src/components/ui/footer/footer.types.ts

export type FooterNavItems = {
  id: string;
  footerMenuLabel: string;
  footerMenuUrl: string;
  footerOpenInNewTab: boolean;
};

export type FooterSocialItems = {
  id: string;
  footerSocialIcon: string;
  footerSocialUrl: string;
  footerSocialOpenInNewTab: boolean;
};

export type FooterGlobal = {
  __typename: "footer_GlobalSet";
  footerNavItem: FooterNavItems[];
  footerSocialItem: FooterSocialItems[];
  footerDisclaimer: string;
  footerLegalLinks: string;
  footerCopyright: string;
};
