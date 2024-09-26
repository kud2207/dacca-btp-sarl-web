import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useModalShowLogin } from "../../../store/auth-store-admin";
import { apiAdm } from "../../../services/api";
import { useNavigate } from "react-router-dom";

interface ILoginAdmProps {}

const LoginAdm: React.FunctionComponent<ILoginAdmProps> = () => {
  const { show, handleClose, setTokenAdmin } = useModalShowLogin();
  const navigate = useNavigate();

  const [email, setEmail] = useState("ulrichkageu@gmail.com");
  const [password, setPassword] = useState("123456");
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState<{
    email: string;
    password: string;
    apiError?: string;
  }>({ email: "", password: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset des erreurs avant la validation
    setErrors({ email: "", password: "" });

    // Validation des champs
    let valid = true;
    let tempErrors = { email: "", password: "", apiError: "" };

    if (!email) {
      tempErrors.email = "Email is required";
      valid = false;
    }

    if (!password) {
      tempErrors.password = "Password is required";
      valid = false;
    }

    setErrors(tempErrors);

    if (valid) {
      setValidated(true);

      try {
        const response = await apiAdm.post("/admin", {
          email: email,
          password: password,
        });
        
        //stoke au token dans le store
        const accessToken = response.data?.accessToken 
        setTokenAdmin(accessToken)

        handleClose();
        navigate("/dashboard");
      } catch (error: any) {
        console.error("ErreurBack:", error.response?.data || error.message);
        setErrors((prevErrors) => ({
          ...prevErrors,
          apiError:
            error.response?.data?.message || "Login failed. Please try again.",
        }));
      }
    } else {
      setValidated(false);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login to your account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Formulaire de connexion avec validation */}
          <Form noValidate onSubmit={handleSubmit} validated={validated}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email || "Please enter a valid email."}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password || "Please enter your password."}
              </Form.Control.Feedback>
            </Form.Group>

            {errors.apiError && (
              <div className="text-danger mb-3">{errors.apiError}</div>
            )}

            <Modal.Footer>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginAdm;
