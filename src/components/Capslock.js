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
        className={`bg-copper lg:h-12 md:h-10 sm:h-9 lg:w-28 md:w-22 sm:w-20 rounded-t-lg rounded-b-3xl font-semibold lg:text-base md:text-xs sm:text-xs ${
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
          className={`absolute -top-5 right-1 text-3xl ${
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
