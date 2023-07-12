import React, { useState } from "react";

const Function = () => {
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
        fn
      </button>
    </div>
  );
};

export default Function;
