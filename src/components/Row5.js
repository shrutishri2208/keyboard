import React from "react";
import Control from "./Control";
import Function from "./Function";
import Alt from "./Alt";
import Space from "./Space";
import ArrowButtons from "./ArrowButtons";
import { arrows } from "../letters";

const Row5 = () => {
  return (
    <div className="sm:my-2 flex lg:gap-4 md:gap-2 sm:gap-1 gap-0.75 items-center justify-center  w-max m-auto">
      <Control />
      <Function />
      <Alt />
      <Space />
      <Alt />
      <Control />
      <div className="flex items-center lg:gap-4 md:gap-2 sm:gap-1 gap-0.5 mt-1.5">
        <ArrowButtons text={"<"} />

        <div className="lg:mt-0.5 md:-mt-1 sm:-mt-1 grid grid-cols-1 lg:gap-1 md:gap-0.5 sm:gap-0.5 gap-0.5">
          <ArrowButtons text={"up"} />
          <ArrowButtons text={"down"} />
        </div>
        <ArrowButtons text={">"} />
      </div>
    </div>
  );
};

export default Row5;
