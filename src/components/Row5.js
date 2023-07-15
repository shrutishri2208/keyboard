import React from "react";
// import Control from "./Control";
// import Function from "./Function";
// import Alt from "./Alt";
// import Space from "./Space";
// import ArrowButtons from "./ArrowButtons";
import { extraKeys } from "../letters";
import ExtraKeys from "./ExtraKeys";

const Row5 = () => {
  return (
    <div className="sm:my-2 flex lg:gap-3 md:gap-2 sm:gap-1 gap-0.75 items-center justify-center  w-max m-auto">
      <ExtraKeys {...extraKeys[0]} />
      <ExtraKeys {...extraKeys[1]} />
      <ExtraKeys {...extraKeys[2]} />
      <ExtraKeys {...extraKeys[3]} />
      <ExtraKeys {...extraKeys[2]} />
      <ExtraKeys {...extraKeys[0]} />
      <ExtraKeys {...extraKeys[4]} />
      <div className="lg:mt-0.5 md:-mt-1 sm:-mt-1 grid grid-cols-1 lg:gap-1 md:gap-0.5 sm:gap-0.5 gap-0.5">
        <ExtraKeys {...extraKeys[6]} />
        <ExtraKeys {...extraKeys[6]} />
      </div>
      <ExtraKeys {...extraKeys[5]} />
    </div>
  );
};

export default Row5;
