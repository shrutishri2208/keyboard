import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewLine } from "../redux/string/stringActions";

const Enter = () => {
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();

  return (
    <div>
      <button
        className={`bg-copper lg:h-12 md:h-10 sm:h-9 h-6 lg:w-24 md:w-22 sm:w-18 w-8 md:rounded-t-lg md:rounded-b-3xl sm:rounded-t-lg sm:rounded-2xl rounded-md font-semibold lg:text-base md:text-xs sm:text-xs text-xxs ${
          clicked === true ? "button-clicked" : ""
        }`}
        onClick={() => {
          dispatch(setNewLine());
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 100);
        }}
      >
        enter
      </button>
    </div>
  );
};

export default Enter;
