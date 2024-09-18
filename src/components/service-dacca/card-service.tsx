import * as React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import img from "../../assets/logoDacca.jpg"; 

interface IServiceDaccaProps {}

interface MyVerticallyCenteredModalProps {
  show: boolean;
  onHide: () => void;
}

const ServiceDacca: React.FunctionComponent<IServiceDaccaProps> = () => {
  const [modalShow, setModalShow] = React.useState(false);


  function MyVerticallyCenteredModal({ show, onHide }: MyVerticallyCenteredModalProps) {
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Détails des Images
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between">
         
            <div style={{ display: "flex", overflowX: "scroll" }}>
              <img src={img} alt="image1" style={{ width: "200px", marginRight: "10px" }} />
              <img src={img} alt="image2" style={{ width: "200px", marginRight: "10px" }} />
              <img src={img} alt="image3" style={{ width: "200px", marginRight: "10px" }} />
              <img src={img} alt="image4" style={{ width: "200px", marginRight: "10px" }} />
            </div>
          </div>
          <div className="mt-3">
          
            <h4>Explication des Images</h4>
            <p>
              Voici des explications pour chaque image. Vous pouvez défiler et cliquer pour voir les détails de chaque image.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Soliciter le sercie</Button>
          <Button onClick={onHide}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="mt-2 mb-2 flex justify-center items-center">
      <Card style={{ width: "19rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <br />
          <div className="d-flex justify-content-end">
            <Button
              variant="success"
              className="h-5 p-2 flex justify-center items-center gap-1"
              onClick={() => setModalShow(true)}
            >
              <i className="bi bi-plus-circle"></i> En savoir plus
            </Button>
          </div>
        </Card.Body>
      </Card>
      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default ServiceDacca;
