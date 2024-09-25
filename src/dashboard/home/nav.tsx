import * as React from "react";
import { apiAdm } from "../../services/api";
import { DataAdmin } from "../../types/type";

interface INavDashboardProps {
  Toggle: () => void;
}

const NavDashboard: React.FunctionComponent<INavDashboardProps> = ({
  Toggle,
}) => {
  const [dataAdmin , setDataAdmin]= React.useState<DataAdmin>()

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

      setDataAdmin(response.data)
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'admin:",
        error
      );
    }
  };

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
          <span>{dataAdmin?.gmail}</span>
        </div>
      </nav>
    </div>
  );
};

export default NavDashboard;
