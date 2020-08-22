import React from "react";
import { Form, Input, FormGroup, Col, Container, Row } from "reactstrap";

const divStyle = {
  background: "#e6e6e6",
  padding: 20,
};
let DashboardComponent = ({ userDetails }) => {
  return (
    <>
      <h4>Welcome {userDetails.full_name} !</h4>
      <div style={divStyle}>
        <h1>DISCOVER PROJECTS</h1>
        <h6 style={{ color: "#404040", textAlign: "center" }}>
          16098 public projects to discover
        </h6>
        <Form>
          <Col
            md={6}
            style={{ margin: "auto", padding: 10, textAlign: "center" }}
          >
            <FormGroup>
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Search Something..."
              />
            </FormGroup>
          </Col>
        </Form>
      </div>
      <Container style={{ padding: 20 }}>
        <Row>
          <Col md={6}>
            <h3>Most Liked</h3>
          </Col>
          <Col md={6}>
            <h3>Most Active</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardComponent;
