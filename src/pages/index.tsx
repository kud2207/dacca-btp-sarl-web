import * as React from "react";
import HeadLang from "../components/head-lang/head-lang";
import HeadInfo from "../components/head-info/head-info";
import MenuService from "../components/menu-service/service";
import BodyCarousels from "../components/body/body";
import ServiceDaccaGroup from "../components/service-dacca/service-dacca";
import PersonneWock from "../components/personne-wock/personne-wock";


interface IAppProps {}

const Acceuil: React.FC<IAppProps> = () => {
  return (
    <div>
      <div>
        <HeadLang />
      </div>
      <div
        className="
      laptop:mx-32 :md:mt-4 md:mb-4
      tablet:mx-10
      mobile:mx-4
      "
      >
        <HeadInfo />
      </div>
      <div>
        <MenuService />
      </div>
      <div className="mt-4 mb-4">
        <BodyCarousels />
      </div>
      <div >
      <ServiceDaccaGroup/>
      </div>
      <div className="mt-10 mb-4">
        <PersonneWock />
      </div>
    </div>
  );
};

export default Acceuil;
