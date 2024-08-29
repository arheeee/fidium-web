import React from "react";
interface StateComponentProps {
  dimensions: string;
  fill: string;
  state: string;
  stateName: string;
  onClick: () => void;
}
export default function StateComponent({
  dimensions,
  fill,
  state,
  onClick,
}: StateComponentProps) {
  return (
    <path
      d={dimensions}
      fill={fill}
      data-name={state}
      className={`${state} state`}
      onClick={onClick}
    ></path>
  );
}
