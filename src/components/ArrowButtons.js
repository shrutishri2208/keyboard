import React, { useState } from "react";

const ArrowButtons = ({ text }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className={`${
          text === "down" || text === "up"
            ? "lg:h-5 md:h-4 sm:h-3.5"
            : "lg:h-12 md:h-10 sm:h-9"
        } relative lg:w-12 md:w-10 sm:w-10 bg-copper rounded-t-lg rounded-b-3xl font-semibold ${
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
          <span className="font-bold lg:text-xl md:text-base relative bottom-0.5">
            {text}
          </span>
        )}
      </button>
      {/* <p>{letter}</p> */}
    </div>
  );
};

export default ArrowButtons;
