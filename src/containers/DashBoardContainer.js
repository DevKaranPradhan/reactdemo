import React from "react";
import { useSelector } from "react-redux";
import DashboardComponent from "../components/DashBoardComponent";

import { Row, Col } from "reactstrap";
import ProjectListContainer from "./ProjectListContainer";
import projectWatcherSaga from "../sagas/projectSaga";

const DashboardContainer = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  console.log("data", userDetails);
  return (
    <>
      <DashboardComponent userDetails={userDetails} />
      <ProjectListContainer />
    </>
  );
};

export default DashboardContainer;
