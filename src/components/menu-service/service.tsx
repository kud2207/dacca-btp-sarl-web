import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { normal } from "../../constants/color";
import ReseauxSocial from "./reseaux-social";
import "./menu-service.css";
import LogoDacca from "../head-info/logo-dacca";
import Modal from "react-bootstrap/Modal";
import { Value } from "../head-info/calendar";

function MenuService() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const [show, setShow] = useState(false);

  const handleCloseTime = () => setShow(false);
  const handleShowTime = () => setShow(true);

  const [date, setDate] = useState<Value>(new Date());

  return (
    <>
      <Navbar
        expand="lg"
        className=""
        style={{ backgroundColor: normal.background }}
      >
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-lg-none flex justify-center items-center gap-4">
            <i onClick={handleShow} className=" bi bi-list"></i>{" "}
            <Navbar.Brand style={{ color: "white" }}>
              <LogoDacca classNameImg="w-7" classNameDacca="pl-2" />
            </Navbar.Brand>
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" variant="underline">
              <Nav.Link className="liste-menu">Home</Nav.Link>
              <Nav.Link className="liste-menu">Link</Nav.Link>
              <Nav.Link className="liste-menu">Home</Nav.Link>
              <Nav.Link className="liste-menu">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="mobile:hidden tablet:hidden">
            <ReseauxSocial />
          </div>
          <i className="d-lg-none">
            <i
              className="bi bi-three-dots-vertical"
              onClick={handleShowTime}
            ></i>
            <Modal show={show} onHide={handleCloseTime} style={{top:'10%'}}>
              <Modal.Header closeButton>
                <Modal.Title className="">
                  <div className="flex gap-3">
                    <i
                      className="bi bi-calendar-month"
                      style={{ color: normal.primary }}
                    />
                    <span>
                      {Array.isArray(date)
                        ? `${date[0]?.toDateString()} - ${date[1]?.toDateString()}`
                        : date?.toDateString()}
                    </span>
                  </div>
                  <div>
                    
                  </div>
                </Modal.Title>
              
              </Modal.Header>
              <Modal.Body>
              <div className="flex gap-3">
                      <i
                        className="bi bi-telephone-fill"
                        style={{ color: normal.primary }}
                      />
                      <div className="hover:text-green-700 cursor-pointer">
                        +237 6 95 83 55 68
                      </div>
                    </div>

              <div className="flex gap-3">
              <i className="bi bi-envelope-at-fill"></i>
              <div>infoline@gmail.com</div>
              </div>
              </Modal.Body>
            </Modal>
          </i>
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement="start"
        style={{ width: "80%", top: "10%" }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="gap-3 flex ">
              <i className="bi bi-facebook text-black hover:text-green-600"></i>
              <i className="bi bi-google text-black hover:text-green-600"></i>
              <i className="bi bi-twitter-x text-black hover:text-green-600"></i>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MenuService;
