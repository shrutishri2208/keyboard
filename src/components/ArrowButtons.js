import React, { useState } from "react";
import { useSelector } from "react-redux";

const ArrowButtons = ({ text }) => {
  const [clicked, setClicked] = useState(false);

  const colour = useSelector((state) => state.colour.colour);

  return (
    <button
      className={`${
        text === "down" || text === "up"
          ? "lg:h-5 md:h-4 sm:h-3.5 h-2.5 sm:mt-1"
          : "lg:h-12 md:h-10 sm:h-9 h-6"
      } relative lg:w-12 md:w-10 sm:w-10 w-6 key key-${colour} sm:rounded-t-lg sm:rounded-b-3xl rounded-md font-semibold ${
        clicked === true ? "button-clicked" : ""
      }`}
      onClick={() => {
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 100);
      }}
    >
      {(text === "<" || text === ">") && (
        <span className="font-bold lg:text-xl md:text-base text-xs relative bottom-0.5">
          {text}
        </span>
      )}
    </button>
  );
};

export default ArrowButtons;
