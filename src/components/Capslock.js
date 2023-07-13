import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCapital } from "../redux/capital/capitalActions";

const Capslock = () => {
  const dispatch = useDispatch();
  const isCapital = useSelector((state) => state.isCapital.isCapital);
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className={`bg-copper lg:h-12 md:h-10 sm:h-9 h-6 lg:w-28 md:w-22 sm:w-20 w-11 md:rounded-t-lg md:rounded-b-3xl sm:rounded-t-lg sm:rounded-2xl rounded-md font-semibold lg:text-base md:text-xs sm:text-xs text-xxs ${
          clicked === true ? "button-clicked" : ""
        }`}
        onClick={() => {
          dispatch(setCapital());
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 100);
        }}
      >
        <p
          className={`absolute sm:-top-5 sm:right-1 sm:text-3xl -top-4 right-0.5  text-lg ${
            isCapital ? "text-white" : "text-black"
          }`}
        >
          .
        </p>
        caps lock
      </button>
    </div>
  );
};

export default Capslock;
