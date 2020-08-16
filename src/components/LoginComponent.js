import React from 'react';
import { Form, FormGroup, FormFeedback, Button, Card, CardBody, Container, Col, Row, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const LoginComponent = ({ validateData, state, dispatch }) => {
    const {username, password, usernameError, passwordError} = state
    
    const setUsernameWrapper = (evt) => {
        dispatch({type: 'field', field: 'username', value: evt.target.value});
    }
    const setPasswordWrapper = (evt) => {
        dispatch({type: 'field', field: 'password', value: evt.target.value});
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
                            <Button onClick={() => {
                                // logValues(); 
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