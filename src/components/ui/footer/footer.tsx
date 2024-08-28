/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import sanitizeHtml from "sanitize-html";
import "./footer.scss";
import { FooterGlobal } from "./footer.types";
import LanguageIcon from "@mui/icons-material/Language";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/icons/customIcons";

const iconMap: { [key: string]: React.ReactNode } = {
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  x: <XIcon />,
  youtube: <YouTubeIcon />,
};

const Footer: React.FC<FooterGlobal> = ({
  footerNavItem,
  footerSocialItem,
  footerDisclaimer,
  footerLegalLinks,
  footerCopyright,
}) => {
  let sanitizedDisclaimer = "";

  try {
    sanitizedDisclaimer = sanitizeHtml(footerDisclaimer, {
      allowedTags: ["b", "i", "em", "strong", "a", "p"],
      allowedAttributes: {
        a: ["href", "target"],
      },
    });
  } catch (error) {
    console.error("Error sanitizing disclaimer content:", error);
  }

  return (
    <footer className="footer__section">
      <div className="footer__wrapper">
        <div className="footer__navigation">
          <div className="footer__navigation-items">
            {footerNavItem.map((item) => (
              <a
                key={item.id}
                href={item.footerMenuUrl}
                className="footer__navigation-items-link"
                target={item.footerOpenInNewTab ? "_blank" : "_self"}
                rel={
                  item.footerOpenInNewTab ? "noopener noreferrer" : undefined
                }
              >
                {item.footerMenuLabel}
              </a>
            ))}
          </div>
          <div className="footer__language-selector">
            <a href="" className="footer__language-selector-link">
              <LanguageIcon className="mr-1" />
              Español
            </a>
          </div>
        </div>
        <div className="footer__social">
          {footerSocialItem.map((icon) => {
            const IconComponent = iconMap[icon.footerSocialIcon];
            return IconComponent ? (
              <a
                key={icon.id}
                href={icon.footerSocialUrl}
                className="footer__social-link"
                target={icon.footerSocialOpenInNewTab ? "_blank" : "_self"}
                rel={
                  icon.footerSocialOpenInNewTab
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={icon.footerSocialIcon}
              >
                {IconComponent}
              </a>
            ) : null;
          })}
        </div>
        <div className="footer__disclaimer">
          <div dangerouslySetInnerHTML={{ __html: sanitizedDisclaimer }} />
        </div>
        <div className="footer__legal-links">
          <div dangerouslySetInnerHTML={{ __html: footerLegalLinks }} />
        </div>
        <div className="footer__copyright">{footerCopyright}</div>
      </div>
    </footer>
  );
};

export default Footer;
