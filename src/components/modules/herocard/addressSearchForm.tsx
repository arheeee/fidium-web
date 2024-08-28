import React from "react";
import "./addressSearchForm.scss";
import Image from "next/image";
import { getImageUrl } from "@lib/imageUrl";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

interface AddressSearchFormProps {
  heroIcon: {
    url: string;
    title: string;
    alt: string | null;
  }[];
  heroFieldPlaceholder: string;
  heroButtonLabel: string;
}

const AddressSearchForm: React.FC<AddressSearchFormProps> = ({
  heroIcon,
  heroFieldPlaceholder,
  heroButtonLabel,
}) => {
  // Set the icon URL within the component
  const iconUrl = heroIcon.length > 0 ? getImageUrl(heroIcon[0].url ?? "") : "";

  return (
    <div className="address-search-form__form-wrapper">
      {iconUrl && (
        <Image
          src={iconUrl}
          alt={heroIcon[0].alt || heroIcon[0].title}
          title={heroIcon[0].title}
          width={84}
          height={46}
          className="address-search-form__icon"
          unoptimized // disable this for now since images are served from craft
          priority
        />
      )}
      <form className="address-search-form__form" noValidate autoComplete="off">
        <FormControl
          className="address-search-form__form-container"
          sx={{ width: "100%" }}
        >
          {heroFieldPlaceholder && (
            <OutlinedInput
              placeholder={heroFieldPlaceholder}
              className="address-search-form__input-field"
            />
          )}

          {heroButtonLabel && (
            <Button className="address-search-form__button" variant="contained">
              {heroButtonLabel}
            </Button>
          )}
        </FormControl>
      </form>
    </div>
  );
};

export default AddressSearchForm;
