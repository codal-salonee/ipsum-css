"use client";

import { useState } from "react";

const text = `Hydraulic oil is a fluid that has several functions. It serves as an
        energy transfer or power transmission medium, lubricant, and sealant.
        Also, it is a fluid that cools the equipment and carries contaminants
        away. Based on the division of hydraulics into hydrodynamics and
        hydrostatics, we have different hydraulic fluids. Firstly, hydraulic
        fluids for hydrodynamic applications are called power-transmission oils.
        Secondly, hydraulic fluids for hydrostatic application are called
        hydraulic oils.`;
const defaultTextLength = 220;
const doesTextOverFlow = text.length > defaultTextLength ? true : false;

export default function HeaderContent() {
  const [isReadMore, setIsReadMore] = useState(doesTextOverFlow);
  return (
    <>
      <h1 className="my-3 text-2xl font-semibold">Hydraulic Fluids</h1>
      <p>
        {isReadMore ? text.slice(0, defaultTextLength) : text}&nbsp;
        {doesTextOverFlow && (
          <button
            className={`text-green`}
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "Read more" : "Read less"}
          </button>
        )}
      </p>
    </>
  );
}
