import * as React from "react";
import LogoDacca from "./logo-dacca";
import ButtonHover from "../button/button-hover";
import CalendarModal from "./calendar";
import { normal } from "../../constants/color";

interface IHeadInfoProps {}

const HeadInfo: React.FunctionComponent<IHeadInfoProps> = () => {
  return (
    <div className="mobile:hidden  flex md:justify-between">
      <div>
        <LogoDacca 
            className=""
            classNameDacca="font-bold"
            classNameImg=" mobile:w-14 "
            
         />
      </div>
      <div className="mobile:hidden tablet:hidden md:flex gap-20 justify-center items-center">
        <div className="flex gap-10">
          <div className="flex gap-4 ">
  
            <div>
              <CalendarModal />
            </div>
          </div>
          <div className="h-8 border-l-2 border-gray-300"></div>
          <div className="flex gap-4">
            <div>
              <i
                className="bi bi-telephone-fill"
                style={{ color: normal.primary }}
              />
            </div>
            <div className="hover:text-green-700 cursor-pointer">
              +237 6 95 83 55 68
            </div>
          </div>
        </div>
        <div>
          <ButtonHover nameButton="CONNEXION" />
        </div>
      </div>
    </div>
  );
};

export default HeadInfo;
