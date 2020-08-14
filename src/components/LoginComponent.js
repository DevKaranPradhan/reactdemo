import React from 'react';
import { Form, FormGroup, FormFeedback, Button, Card, CardBody, Container, Col, Row, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const LoginComponent = ({username, password, setUsername, setPassword, 
    logValues, schema, validateData, usernameError, passwordError}) => {
    const setUsernameWrapper = (evt) => {
        setUsername(evt.target.value);
    }
    const setPasswordWrapper = (evt) => {
        setPassword(evt.target.value);
    }
    let errors, arr=[]
    const findErrors = () => {
        schema
            .validate({username, password}, {abortEarly: false})
            .catch((err) => {
                errors = err.errors;
                errors.map((error) => {
                    // arr.push(<Alert color="danger">{error}</Alert>)
                    console.log(error);
                });
            });
            
    }
    return (
        <Container>
            <Row>
                <Col sm={{size:6, offset:3}}>
                <Card>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" value={username} onChange={setUsernameWrapper} invalid={(usernameError !== null) ? true : false } />
                                <FormFeedback>{usernameError}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" value={password} onChange={setPasswordWrapper} invalid={(passwordError !== null) ? true : false } />
                                <FormFeedback>{passwordError}</FormFeedback>
                            </FormGroup>
                            {/* {errors && <Alert color="danger">{errors}</Alert>} */}
                            <Button onClick={() => {
                                // logValues(); 
                                // schema.validate({username: username, password: password}, {abortEarly: false});
                                validateData();
                            }}>
                                Login
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </Container>
        
        
    );
}

export default LoginComponent;

LoginComponent.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    logValues: PropTypes.func.isRequired
}

LoginComponent.defaultProps = {
    // username: 'test'
}