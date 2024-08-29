import StateComponent from "./state";
import data from "./data/map-dimensions";

interface MapComponentProps {
  width?: number | string;
  height?: number | string;
  defaultFill?: string;
  selectedFill?: string;
  statesSelected?: Array<string>;
  excludedStates?: Array<string>;
}
export default function MapComponent({
  width = 587,
  height = 365,
  defaultFill = "#EBECF2",
  selectedFill = "#008533",
  statesSelected = [],
  excludedStates = ["AK", "HI"],
}: MapComponentProps) {
  const getStates = () => {
    const statesData: {
      [key: string]: {
        dimensions: string;
        abbreviation: string;
        name: string;
      };
    } = data();
    const states = [];
    for (const stateKey in statesData) {
      if (excludedStates.includes(stateKey)) {
        continue;
      }
      const isSelected = statesSelected.includes(stateKey);
      const fill = isSelected ? selectedFill : defaultFill;
      const path = (
        <StateComponent
          key={stateKey}
          stateName={statesData[stateKey].name}
          dimensions={statesData[stateKey]["dimensions"]}
          state={stateKey}
          fill={fill}
          onClick={() => {}}
        />
      );
      states.push(path);
    }

    return states;
  };
  return (
    <svg
      className="us-map"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 959 593"
    >
      <title></title>
      <g className="outlines">{getStates()}</g>
    </svg>
  );
}
