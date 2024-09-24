import * as React from "react";
import { useEffect } from "react";
import { apiAdm } from "../../services/api";

interface INavDashboardProps {
  Toggle: () => void;
}

const NavDashboard: React.FunctionComponent<INavDashboardProps> = ({
  Toggle,
}) => {

  const dataAdminToken = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Aucun token trouvé dans le localStorage");
      return;
    }

    try {
      const response = await apiAdm.get("/admin/dataAdm", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Données de l'admin:", response.data?.accessToken);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'admin:",
        error
      );
    }
  };

  useEffect(() => {
    dataAdminToken();
  }, [dataAdminToken()]); 

  return (
    <div className="m-2">
      <nav className="navbar navbar-expand-sm navbar-white bg-white px-3 flex justify-between">
        <i
          className="navbar-brand bi bi-justify-left fs-4"
          onClick={Toggle}
        ></i>
        <div className="flex gap-2 justify-center items-center">
          <i className="bi bi-person-circle fs-4"></i>
          <span>kageu ulrich</span>
        </div>
      </nav>
    </div>
  );
};

export default NavDashboard;
