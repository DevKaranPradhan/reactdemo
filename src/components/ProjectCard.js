import React from "react";
import { Container, Row, Col } from "reactstrap";

const ProjectCard = (props) => {
  const { image_url, name, description } = props.project;
  return (
    <Container style={{ padding: 20 }}>
      <center>
        <Row>
          <Col xs="3">
            <img
              style={{ width: "70px" }}
              src={image_url}
              className="img-responsive"
              alt="img"
            />
          </Col>
          <Col>
            <h5 className="text-left">{name}</h5>
            <p className="text-left">{description}</p>
          </Col>
        </Row>
      </center>
      <hr />
    </Container>
  );
};

export default ProjectCard;
