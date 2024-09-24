import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); 
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
      <h1 className="display-3 text-danger">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="text-center mb-4">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Button variant="" onClick={goHome}>
        Go Back to Home...
      </Button>
    </Container>
  );
};

export default PageNotFound;
