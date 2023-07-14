import React, { useState } from "react";
import { useSelector } from "react-redux";

const Shift = () => {
  const [clicked, setClicked] = useState(false);

  const colour = useSelector((state) => state.colour.colour);

  return (
    <button
      className={`key key-${colour} lg:h-12 md:h-10 sm:h-9 h-6 lg:w-34 md:w-26 sm:w-24 w-12 md:rounded-t-lg md:rounded-b-3xl sm:rounded-t-lg sm:rounded-2xl rounded-md font-semibold lg:text-base md:text-xs sm:text-xs text-xxs ${
        clicked === true ? "button-clicked" : ""
      }`}
      onClick={() => {
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 100);
      }}
    >
      shift
    </button>
  );
};

export default Shift;
