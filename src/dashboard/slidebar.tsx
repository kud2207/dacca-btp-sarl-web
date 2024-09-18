import * as React from 'react';
import './slidebar.css';
import LogoDacca from '../components/head-info/logo-dacca';

interface ISlidebarProps {}

const Slidebar: React.FunctionComponent<ISlidebarProps> = () => {
  return (
    <div className="sidebar p-2 ">
      <div className="brand-section mb-4 flex gap-2">
        <LogoDacca IsVisibleDacca={false} classNameImg="w-10" />
        <span className="brand-name fs-5">DACCA BTP SARL</span>
      </div>
      <div className="list-group list-group-flush">
        <a className="py-2 hoverSlider">
          <i className="bi bi-speedometer fs-5 me-2"></i>
          <span className="fs-5">Dashboard</span>
        </a>
        <a className="py-2 flex my-1 hoverSlider">
          <i className="bi bi-tools fs-5 me-3"></i> 
          <span className="fs-5">Services</span>
        </a>
        <a className="py-2 flex hoverSlider">
          <i className="bi bi-building fs-5 me-3"></i> 
          <span className="fs-5">Realizations</span>
        </a>
        <a className="py-2 flex hoverSlider">
          <i className="bi bi-person-badge fs-5 me-3"></i> 
          <span className="fs-5">Administration</span>
        </a>
        <a className="py-2 flex mt-56">
          <i className="bi bi-power fs-5 me-2 text-red-700"></i>
          <span className="fs-5 text-red-500">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Slidebar;
