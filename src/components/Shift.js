import React, { useState } from "react";

const Shift = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className={`bg-copper lg:h-12 md:h-10 sm:h-9 lg:w-34 md:w-26 sm:w-24 rounded-t-lg rounded-b-3xl font-semibold lg:text-base md:text-xs sm:text-xs ${
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
    </div>
  );
};

export default Shift;
