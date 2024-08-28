import React from "react";
import "./hero.scss";
import Image from "next/image";
import { HeroBlock } from "@/types/types";
import { getImageUrl } from "@lib/imageUrl";
import AddressSearchForm from "@components/modules/herocard/addressSearchForm";

// The Hero block Component

interface HeroProps {
  block: HeroBlock;
}

const Hero: React.FC<HeroProps> = ({ block }) => {
  // Gets the first image url since it is an array
  const imageUrl = block.heroImage.length
    ? getImageUrl(block.heroImage[0].url ?? "")
    : "";
  const mobileImageUrl = block.heroMobileImage.length
    ? getImageUrl(block.heroMobileImage[0].url ?? "")
    : "";

  return (
    <section className="hero__section">
      <div className="hero__container">
        <div
          className={`hero__background ${mobileImageUrl ? "hero__has-mobile-bg" : ""}`}
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={block.heroImage[0].alt || block.heroImage[0].title}
              title={block.heroImage[0].title}
              width={1440}
              height={850}
              className="hero__image"
              unoptimized // disable this for now since images are served from craft
              priority
            />
          )}
          {mobileImageUrl && (
            <Image
              src={mobileImageUrl}
              alt={
                block.heroMobileImage[0].alt || block.heroMobileImage[0].title
              }
              title={block.heroMobileImage[0].title}
              width={390}
              height={536}
              className="hero__mobile-image"
              unoptimized // disable this for now since images are served from craft
              priority
            />
          )}
        </div>

        <div className="hero__content">
          <div className="hero__copy-wrap">
            <h1 className="hero__header">{block.heroHeader}</h1>
            {block.heroSubHeader && (
              <p className="hero__subtitle">{block.heroSubHeader}</p>
            )}
          </div>

          {!block.heroHideCheckAvailability && (
            <div className="hidden xsm:block">
              <AddressSearchForm
                heroIcon={block.heroIcon}
                heroFieldPlaceholder={block.heroFieldPlaceholder}
                heroButtonLabel={block.heroButtonLabel}
              />
            </div>
          )}
        </div>
      </div>
      {!block.heroHideCheckAvailability && (
        <div className="block xsm:hidden">
          <AddressSearchForm
            heroIcon={block.heroIcon}
            heroFieldPlaceholder={block.heroFieldPlaceholder}
            heroButtonLabel={block.heroButtonLabel}
          />
        </div>
      )}
    </section>
  );
};

export default Hero;
