import React from 'react';
import './subHero.scss';
import Image from 'next/image';
import { SubHeroBlock } from '@/types/types';
import { getImageUrl } from '@lib/imageUrl';
import AltAddressSearchForm from '@components/modules/herocard/altAddressSearchForm';

// The Hero block Component

interface SubHeroProps {
  block: SubHeroBlock;
}

const SubHero: React.FC<SubHeroProps> = ({ block }) => {
  // Ensure the arrays exist before accessing the first element
  const subHeroImageUrl = block.subHeroImage.length > 0 ? getImageUrl(block.subHeroImage[0].url ?? '') : '';
  const subHeroMobileImageUrl = block.subHeroMobileImage.length > 0 ? getImageUrl(block.subHeroMobileImage[0].url ?? '') : '';

  // Determine the hero style class
  const subHeroBackgroundColorClass = block.subHeroBackgroundColor === 'blue' ? 'sub-hero__has-blue-bg' : 'sub-hero__has-yellow-bg';

  return (
    <section className="sub-hero__section">
      <div className="sub-hero__wrapper">
        <div className={`sub-hero__container ${subHeroBackgroundColorClass}`}>
          <div className="sub-hero__content">

            <div className="sub-hero__copy-wrap">
              <h1 className="sub-hero__header">{block.subHeroHeader}</h1>
              {block.subHeroSubHeader && <p className="sub-hero__subtitle">{block.subHeroSubHeader}</p>} 
            </div>
            
          </div>

          <div className={`sub-hero__background ${subHeroMobileImageUrl ? 'sub-hero__has-mobile-bg' : ''}`}>
            {subHeroImageUrl && (
              <Image
                src={subHeroImageUrl}
                alt={block.subHeroImage[0].alt || block.subHeroImage[0].title}
                title={block.subHeroImage[0].title}
                width={1440}
                height={850}
                className="sub-hero__image"
                unoptimized // disable this for now since images are served from craft
                priority
              />
            )}
            {subHeroMobileImageUrl && (
              <Image
                src={subHeroMobileImageUrl}
                alt={block.subHeroMobileImage[0].alt || block.subHeroMobileImage[0].title}
                title={block.subHeroMobileImage[0].title}
                width={390}
                height={536}
                className="sub-hero__mobile-image"
                unoptimized // disable this for now since images are served from craft
                priority
              />
            )}
          </div>
        </div>
        {!block.subHeroHideCheckAvailability && (
          <AltAddressSearchForm 
            subHeroIcon={block.subHeroIcon} 
            subHeroFieldPlaceholder={block.subHeroFieldPlaceholder} 
            subHeroButtonLabel={block.subHeroButtonLabel}
          />
        )}
      </div>
    </section>
  );
};

export default SubHero;