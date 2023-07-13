import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteString } from "../redux/string/stringActions";

const Backspace = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const colour = useSelector((state) => state.colour.colour);

  return (
    <div>
      <button
        className={`key key-${colour} lg:h-12 md:h-10 sm:h-9 h-6 lg:w-24 md:w-22 sm:w-20 w-10 md:rounded-t-lg md:rounded-b-3xl sm:rounded-t-lg sm:rounded-2xl rounded-md font-semibold lg:text-base md:text-xs sm:text-xs text-xxs ${
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
