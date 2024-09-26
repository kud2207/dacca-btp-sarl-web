import * as React from "react";
import { useModalShowLogin } from "../../store/auth-store-admin";

interface INavDashboardProps {
  Toggle: () => void;
}

const NavDashboard: React.FunctionComponent<INavDashboardProps> = ({
  Toggle,
}) => {
  const {  dataAdmim , dataAdminToken} = useModalShowLogin();



  dataAdminToken();

  return (
    <div className="m-2">
      <nav className="navbar navbar-expand-sm navbar-white bg-white px-3 flex justify-between">
        <i
          className="navbar-brand bi bi-justify-left fs-4"
          onClick={Toggle}
        ></i>
        <div className="flex gap-2 justify-center items-center">
          <i className="bi bi-person-circle fs-4"></i>
          <span>{dataAdmim?.gmail}</span>
        </div>
      </nav>
    </div>
  );
};

export default NavDashboard;
