import * as React from "react";

interface INavDashboardProps {
    Toggle: ()=> void
}

const NavDashboard: React.FunctionComponent<INavDashboardProps> = ({Toggle}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-white bg-white px-3 flex justify-between">
        <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
        <i className="bi bi-person-circle fs-4"></i>
      </nav>
    </div>
  );
};

export default NavDashboard;
