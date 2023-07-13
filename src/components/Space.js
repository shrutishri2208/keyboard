import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSpace } from "../redux/string/stringActions";

const Space = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className={`bg-copper lg:h-12 md:h-10 sm:h-9 lg:w-82 md:w-66 sm:w-60 rounded-t-lg rounded-b-3xl font-semibold text-transparent ${
          clicked === true ? "button-clicked" : ""
        }`}
        onClick={() => {
          dispatch(setSpace());
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 100);
        }}
      >
        space
      </button>
    </div>
  );
};

export default Space;
