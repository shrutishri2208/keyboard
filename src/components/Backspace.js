import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteString } from "../redux/string/stringActions";

const Backspace = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className={`bg-copper lg:h-12 md:h-10 sm:h-9 lg:w-24 md:w-22 sm:w-20 rounded-t-lg rounded-b-3xl font-semibold lg:text-base md:text-xs sm:text-xs  ${
          clicked === true ? "button-clicked" : ""
        }`}
        onClick={() => {
          dispatch(deleteString());
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 100);
        }}
      >
        backspace
      </button>
    </div>
  );
};

export default Backspace;
