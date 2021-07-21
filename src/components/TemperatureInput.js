import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default function TemperatureInput({ scale, temperature, change }) {
  return (
    <>
      <fieldset>
        <legend>Enter Temperature in {scaleNames[scale]}</legend>
        <input
          type="number"
          value={temperature}
          onChange={(e) => change(e, scale)}
        />
      </fieldset>
    </>
  );
}
