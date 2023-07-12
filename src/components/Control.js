import React, { useState } from "react";

const Control = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className={`bg-copper h-12 w-16 rounded-t-lg rounded-b-3xl font-semibold  ${
          clicked === true ? "button-clicked" : ""
        }`}
        onClick={() => {
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 100);
        }}
      >
        ctrl
      </button>
    </div>
  );
};

export default Control;
