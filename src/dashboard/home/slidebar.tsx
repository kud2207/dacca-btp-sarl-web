import * as React from "react";
import "./slidebar.css";
import LogoDacca from "../../components/head-info/logo-dacca";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

interface ISlidebarProps {}

const Slidebar: React.FunctionComponent<ISlidebarProps> = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="sidebar p-2 ">
      <div className="brand-section mb-4 flex gap-2">
        <LogoDacca IsVisibleDacca={false} classNameImg="w-8" />
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
        <a className="py-2 flex mt-56 cursor-pointer" onClick={openModal}>
          <i className="bi bi-power fs-5 me-2 text-red-700 " />
          <span className="fs-5 text-red-500 cursor-pointer">Logout</span>
        </a>
      </div>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header>
          <Modal.Title>Déconnexion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Voulez-vous vraiment quitter la session ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Annuler
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Déconnexion
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Slidebar;
