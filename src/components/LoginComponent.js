import React from 'react';
import { Form, FormGroup, FormFeedback, Button, Card, CardBody, Container, Col, Row, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const LoginComponent = ({username, password, setUsername, setPassword, logValues, schema}) => {
    const setUsernameWrapper = (evt) => {
        setUsername(evt.target.value);
    }
    const setPasswordWrapper = (evt) => {
        setPassword(evt.target.value);
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
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" value={username} onChange={setUsernameWrapper}/>
                                <FormFeedback>Oh noes! that email is already taken</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" value={password} onChange={setPasswordWrapper}/>
                                <FormFeedback>Oh noes! password cannot be blank</FormFeedback>
                            </FormGroup>
                            <Button onClick={() => {
                                logValues(); 
                                schema.validate({username: username, password: password}, {abortEarly: false});
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