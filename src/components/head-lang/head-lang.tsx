import * as React from "react";
import { normal } from "../../constants/color";
import SwitchLang from "./switch-lang";

interface HeadLangProps {}

const HeadLang: React.FC<HeadLangProps> = () => {
  return (
    <div>
      <div style={{ backgroundColor: normal.secondary }} className="h-7">
        <div
          style={{
            backgroundColor: normal.primary,
            clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)",
          }}
          className="w-[86%]  h-7 relative flex justify-end"
        >
          .
        </div>
      </div>
      <div className="absolute right-0 top-0 mt-1 mr-1">
        <SwitchLang />
      </div>
    </div>
  );
};

export default HeadLang;
