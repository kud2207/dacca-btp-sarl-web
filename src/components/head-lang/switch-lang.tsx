import { useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import en from "../../assets/enDrapeau.png";
import fr from "../../assets/frDrapeau.png";

const SwitchLang = () => {
  const [isFrench, setIsFrench] = useState<boolean>(true);

  const handleSwitchChange = (checked: boolean) => {
    setIsFrench(checked);
  };

  return (
    <form>
      <div className="flex items-center space-x-3 right-0 ">
        <Switch.Root
          className={`w-5 h-2 ${
            isFrench ? "bg-blue-500" : "bg-white"
          } rounded-lg relative shadow-lg focus:outline-none cursor-pointer transition-colors duration-300 ease-in-out pl-`}
          id="language-switch"
          checked={isFrench}
          onCheckedChange={handleSwitchChange}
          style={{
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            paddingLeft: 0,
            paddingTop: 1,
          }}
        >
          <Switch.Thumb className="block w-4 h-4  bg-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform translate-x-1 data-[state=checked]:translate-x-[22px]">
            <img
              src={isFrench ? fr : en}
              alt={isFrench ? "Français" : "English"}
              className="w-full h-full object-contain rounded-full"
              style={{
                padding: "0px",
              }}
            />
          </Switch.Thumb>
        </Switch.Root>
      </div>
    </form>
  );
};

export default SwitchLang;
