import React, { useReducer, useContext } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "../styles/Login.css";
import displayToast from "../utils/displayToast";
import { validateInputField } from "../utils/validations";
import axios from "axios";
import { URLS } from "../utils/routesPath";
import { AuthContext } from "../components/Auth";

const initialState = {
  userName: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_NAME":
      return {
        ...state,
        userName: action.userName,
      };

    case "USER_PASSWORD":
      return {
        ...state,
        password: action.password,
      };

    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function Login() {
  const { setUserData } = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUserNameChange = (event) => {
    dispatch({
      type: "USER_NAME",
      userName: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    dispatch({
      type: "USER_PASSWORD",
      password: event.target.value,
    });
  };

  const { userName, password } = state;

  const submitForm = (e) => {
    e.preventDefault();
    console.log("hi");

    if (
      validateInputField({ field: userName, fieldName: "user name" }) &&
      validateInputField({ field: password, fieldName: "password" })
    ) {
      console.log("validate");
      const body = { username: userName, password };

      axios
        .post(URLS.VERIFY_USER, body)
        .then(function (response) {
          // console.log(response);
          const { status } = response;

          if (status == 200) {
            if (response.data && response.data.id) {
              setUserData(response.data);
              resetForm();
              displayToast({ type: "success", msg: "Login Successful!" });
            } else {
              console.log("validate");
              displayToast({
                type: "error",
                msg: "Please enter valid credentials!",
              });
            }
          }
        })
        .catch(function (error) {
          console.log(error);
          displayToast({ type: "error", msg: "Oops! Something went wrong" });
        });
    } else {
      // displayToast({type : "error", msg : "Login Failed!"});
    }
  };

  const resetForm = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div className="login-bg">
      <Row className="login--row">
        <Col md={{ span: 8, offset: 2 }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "black", fontweight: "bold" }}>
              Ecommerce Management System
            </h1>
          </div>
          <br />
          <Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                value={userName}
                onChange={handleUserNameChange}
                type="text"
                placeholder="Enter user name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button size="lg" variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
