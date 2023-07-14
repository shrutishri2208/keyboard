import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSpace } from "../redux/string/stringActions";

const Space = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const colour = useSelector((state) => state.colour.colour);

  return (
    <button
      className={`key key-${colour} lg:h-12 md:h-10 sm:h-9 h-6 lg:w-82 md:w-68 sm:w-60 w-18 md:rounded-t-lg md:rounded-b-3xl sm:rounded-t-lg sm:rounded-2xl rounded-md font-semibold lg:text-base md:text-xs sm:text-xs text-xxs text-transparent ${
        clicked === true ? "button-clicked" : ""
      }`}
      onClick={() => {
        dispatch(setSpace());
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 100);
      }}
    ></button>
  );
};

export default Space;
