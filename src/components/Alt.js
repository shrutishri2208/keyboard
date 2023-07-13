import React, { useState } from "react";

const Alt = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className={`bg-copper lg:h-12 md:h-10 sm:h-9 h-6 lg:w-16 md:w-12 sm:w-10 w-6 md:rounded-t-lg md:rounded-b-3xl sm:rounded-t-lg sm:rounded-2xl rounded-md font-semibold lg:text-base md:text-xs sm:text-xs text-xxs ${
          clicked === true ? "button-clicked" : ""
        }`}
        onClick={() => {
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 100);
        }}
      >
        alt
      </button>
    </div>
  );
};

export default Alt;
