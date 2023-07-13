import React from "react";
import Control from "./Control";
import Function from "./Function";
import Alt from "./Alt";
import Space from "./Space";
import ArrowButtons from "./ArrowButtons";
import { arrows } from "../letters";

const Row5 = () => {
  return (
    <div className="my-2 flex lg:gap-4 md:gap-2 sm:gap-1 items-center justify-center">
      <Control />
      <Function />
      <Alt />
      <Space />
      <Alt />
      <Control />
      <div className="flex items-center lg:gap-4 md:gap-2 sm:gap-1">
        <ArrowButtons text={"<"} />
        <div className="lg:-mt-1 md:-mt-1 sm:-mt-1">
          <ArrowButtons text={"up"} />
          <ArrowButtons text={"down"} />
        </div>
        <ArrowButtons text={">"} />
      </div>
    </div>
  );
};

export default Row5;
