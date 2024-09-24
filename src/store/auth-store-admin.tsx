import { createContext, ReactNode, useContext, useState } from "react";

export type LoginStore = {
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ModalShowLogin.Provider value={{ show, handleClose, handleShow }}>
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
