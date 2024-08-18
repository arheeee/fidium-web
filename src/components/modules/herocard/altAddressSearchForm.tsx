import React from 'react';
import Image from 'next/image';
import { getImageUrl } from '@lib/imageUrl';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

interface AltAddressSearchFormProps {
  subHeroIcon: {
    url: string;
    title: string;
    alt: string | null;
  }[];
  subHeroFieldPlaceholder: string;
  subHeroButtonLabel: string;
}

const AltAddressSearchForm: React.FC<AltAddressSearchFormProps> = ({
  subHeroIcon,
  subHeroFieldPlaceholder,
  subHeroButtonLabel,
}) => {
  // Set the icon URL within the component
  const altIconUrl = subHeroIcon.length > 0 ? getImageUrl(subHeroIcon[0].url ?? '') : '';


  return (
    <div className="alt-address-search-form__form-wrapper">
      {altIconUrl && (
        <Image
          src={altIconUrl}
          alt={subHeroIcon[0].alt || subHeroIcon[0].title}
          title={subHeroIcon[0].title}
          width={84}
          height={46}
          className="alt-address-search-form__icon"
          unoptimized // disable this for now since images are served from craft
          priority
        />
      )}
      <form className="alt-address-search-form__form" noValidate autoComplete="off">
        <FormControl className="alt-address-search-form__form-container" sx={{ width: '100%' }}>
          {subHeroFieldPlaceholder && (
            <OutlinedInput 
              placeholder={subHeroFieldPlaceholder} 
              className="alt-address-search-form__input-field"
            />
          )}
          
          {subHeroButtonLabel && (
            <Button 
              className="alt-address-search-form__button" 
              variant="contained"
            >
              {subHeroButtonLabel}
            </Button> 
          )}
        </FormControl>
      </form>
    </div>
  );
};

export default AltAddressSearchForm;