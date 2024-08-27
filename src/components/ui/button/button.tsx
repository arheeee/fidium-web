import { StyledButton, StyledIconButton } from './button.styles';
import withTheme from '@theme/withTheme';
import { IButtonprops } from './button.types';
const variantMapping = {
  primary: 'contained' as const,
  secondary: 'outlined' as const,
  tertiary: 'text' as const
};

const sizeToType = {
  small: 'text-xs-medium',
  medium: 'text-s-medium',
  large: 'text-m-medium'
};

const BaseButton: React.FC<IButtonprops> = (props: IButtonprops) => {
  const {
    size,
    variant,
    disabled,
    startIcon,
    endIcon,
    iconOnly,
    clearIcon,
    children,
    className
  } = props;

  return iconOnly ? (
    <StyledIconButton
      className={`${className} ${clearIcon ? 'clear' : ''}`}
      disabled={disabled}
      color="primary"
    >
      {startIcon}
    </StyledIconButton>
  ) : (
    <>
      <StyledButton
        {...props}
        className={`${className} ${sizeToType[size || 'large']}`}
        variant={variant ? variantMapping[variant] : variantMapping['primary']}
        disableElevation={true}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {children}
      </StyledButton>
    </>
  );
};

export const Button = withTheme(BaseButton);
