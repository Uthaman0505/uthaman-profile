import React from "react";

export const SmallHeading = ({ text }) => {
  return (
    <p className="uppercase font-14 bold-600 primaryColor ls-1 text-center mtb-10">
      {text}
    </p>
  );
};