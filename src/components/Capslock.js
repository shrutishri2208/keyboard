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
        className={`bg-copper h-12 w-28 rounded-t-lg rounded-b-3xl font-semibold  ${
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
