import React from "react";
const Greet = ({ name, surname }) => {
  // console.log(props, "props");

  return <h1>Hello {`${name} ${surname}`}</h1>;
};

export default Greet;
