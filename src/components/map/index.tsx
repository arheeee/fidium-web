"use client";
import MapComponent from "./map";
import { MapLocationEntry } from "@/types/types";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import { useState } from "react";
// const statesSelected = ["TX", "CA", "MN", "IL", "PA", "VT", "NH", "ME"];

interface MapProps {
  locations: MapLocationEntry;
}

export default function Map({ locations }: MapProps) {
  const states = locations.locationsEntries.filter(
    (location) => !!location.locationStateCode,
  );

  console.log(states);
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="p-6">
        <MapComponent
          statesSelected={
            states.map((location) => location.locationStateCode) as string[]
          }
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="flex flex-col gap-y-3 py-6 px-3 justify-center">
        <h2 className="text-5xl	leading-[3rem] font-medium">
          <span className="text-green-600">We’re expanding</span> to new
          locations every day.
        </h2>
        <p className="text-lg leading-7 my-2">
          {
            "We're bringing the fastest internet speeds to communities across the U.S."
          }
        </p>
        <Select
          displayEmpty
          labelId="states-select"
          id="states-select"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          renderValue={(value) => {
            if (!value) {
              return <em>Select a state to see cities</em>;
            }

            return value;
          }}
        >
          {states.map((location) => (
            <MenuItem key={location.id} value={location.title}>
              {location.title}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
