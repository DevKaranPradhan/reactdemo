import React from "react";
import { useSelector } from "react-redux";
import DashboardComponent from "../components/DashBoardComponent";

import ProjectListContainer from "./ProjectListContainer";

const DashboardContainer = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  return (
    <>
      <DashboardComponent userDetails={userDetails} />
      <ProjectListContainer />
    </>
  );
};

export default DashboardContainer;
