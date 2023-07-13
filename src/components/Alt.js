import React, { useState } from "react";

const Alt = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className={`bg-copper lg:h-12 md:h-10 sm:h-9 lg:w-16 md:w-12 sm:w-10 rounded-t-lg rounded-b-3xl font-semibold lg:text-base md:text-xs ${
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
