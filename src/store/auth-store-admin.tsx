import { createContext, ReactNode, useContext, useState } from "react";
import { DataAdmin } from "../types/type";
import { apiAdm } from "../services/api";

export type LoginStore = {
  show: boolean;
  tokenAdmin: string | null;
  token: string |null| undefined
  dataAdmim: DataAdmin | null;
  setTokenAdmin: (e: string) => void;
  setDataAdmin: (e: DataAdmin | null) => void;
  handleClose: () => void;
  handleShow: () => void;
  dataAdminToken: () => void
};

// Création du contexte avec des valeurs par défaut
export const ModalShowLogin = createContext<LoginStore | undefined>(undefined);

// Fournisseur du contexte
export const ModalShowLoginProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [show, setShow] = useState(false);
  const [tokenAdmin, setTokenAdmin] = useState<string | null>(null);
  const [dataAdmim, setDataAdmin] = useState<DataAdmin | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token = tokenAdmin;
  const dataAdminToken = async () => {

    if (!token) {
      console.error("Aucun token trouvé ");
      return;
    }

    try {
      const response = await apiAdm.get("/admin/dataAdm", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDataAdmin(response.data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'admin:",
        error
      );
    }
  };

  return (
    <ModalShowLogin.Provider
      value={{
        show,
        token,
        tokenAdmin,
        setTokenAdmin,
        dataAdmim,
        setDataAdmin,
        handleClose,
        handleShow,
        dataAdminToken
      }}
    >
      {children}
    </ModalShowLogin.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useModalShowLogin = () => {
  const context = useContext(ModalShowLogin);
  if (!context) {
    throw new Error(
      "useModalShowLogin must be used within a ModalShowLoginProvider"
    );
  }
  return context;
};
