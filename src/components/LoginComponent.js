import React from "react";
import {
  Form,
  FormGroup,
  FormFeedback,
  Button,
  Card,
  CardBody,
  Container,
  Col,
  Row,
  Label,
  Input,
} from "reactstrap";
import PropTypes from "prop-types";
import { setUsername, setPassword } from "../actions/loginActions";

const LoginComponent = ({
  dispatch,
  validateData,
  passwordError,
  usernameError,
  password,
  username,
}) => {
  // const { username, password, usernameError, passwordError } = state;

  const setUsernameWrapper = (evt) => {
    dispatch(setUsername(evt));
  };
  const setPasswordWrapper = (evt) => {
    dispatch(setPassword(evt));
  };

  return (
    <Container style={{ paddingTop: "25vh", minHeight: "50vh" }}>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="example@company.com"
                    value={username}
                    onChange={setUsernameWrapper}
                    invalid={usernameError !== null ? true : false}
                  />
                  <FormFeedback>{usernameError}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password"
                    value={password}
                    onChange={setPasswordWrapper}
                    invalid={passwordError !== null ? true : false}
                  />
                  <FormFeedback>{passwordError}</FormFeedback>
                </FormGroup>
                <Button
                  onClick={() => {
                    // logValues();
                    validateData();
                  }}
                >
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComponent;

LoginComponent.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  // setUsername: PropTypes.func.isRequired,
  // setPassword: PropTypes.func.isRequired,
  // logValues: PropTypes.func.isRequired,
};

// LoginComponent.defaultProps = {
//   username: 'test'
// };
