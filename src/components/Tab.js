import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTab } from "../redux/string/stringActions";

const Tab = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className={`bg-copper h-12 w-24 rounded-t-lg rounded-b-3xl font-semibold  ${
          clicked === true ? "button-clicked" : ""
        }`}
        onClick={() => {
          dispatch(setTab());
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 100);
        }}
      >
        tab
      </button>
    </div>
  );
};

export default Tab;
