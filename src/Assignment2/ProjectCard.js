import React from "react";
import { Media, Container, Row, Col } from "reactstrap";
const ProjectCard = (props) => {
  const { image_url, name, description } = props.project;
  return (
    <Media>
      <Media left href="#" className="mr-2">
        <Media
          object
          style={{ maxHeight: 128, maxWidth: 128 }}
          src={image_url}
          alt="Generic placeholder image"
        />
      </Media>
      <Media body>
        <Media heading>{name}</Media>
        {description}
      </Media>
    </Media>
  );
};
export default ProjectCard;
