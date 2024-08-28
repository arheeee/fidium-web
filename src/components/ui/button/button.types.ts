import { ReactEventHandler } from "react";

export interface IButtonprops {
  id: string;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * ClassName passthrough for custom styles
   */
  className?: string;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: "primary" | "secondary" | "tertiary";
  /**
   * Is icon only button
   * @default false
   */
  iconOnly?: boolean;
  /**
   * For icon only buttons, sets a clear background
   */
  clearIcon?: boolean;
  /**
   * link for the button, switches button to use <a></a>
   */
  href?: string;
  /**
   * on click callback
   */
  onClick?: ReactEventHandler;
}
