import React, { useState } from "react";

const Shift = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className={`bg-copper h-12 w-34 rounded-t-lg rounded-b-3xl font-semibold  ${
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
