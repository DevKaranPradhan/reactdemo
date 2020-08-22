import React from "react";
import projectList from "./projectList.json";
import ProjectRow from "./ProjectRow";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "reactstrap";

const ProjectList = () => {
  // let arr = [];
  // for( let i=0; i<projectList.length; i+=2){
  //     arr.push(<ProjectRow project1 = {projectList[i]} project2 = {projectList[i+1]}/>);
  // }
  // return (arr);
  //  {if (props.project2 !== false) {<Col xs="6"><ProjectCard project = {props.project2}/></Col>}}
  let flag = true;
  let project1, project2;
  const rowLen = projectList.length;
  return (
    <Container>
      {projectList.map((project, i) => {
        if (flag === true) {
          project1 = project;
          flag = false;
          if (rowLen === i + 1) {
            return (
              <Container className="container pt-3">
                <Row>
                  <Col>
                    <ProjectCard project={project1} />
                  </Col>
                </Row>
              </Container>
            );
          }
        } else {
          project2 = project;
          flag = true;
          return <ProjectRow project1={project1} project2={project2} />;
        }
      })}
    </Container>
  );
};
export default ProjectList;
