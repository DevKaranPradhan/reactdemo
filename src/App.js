import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Greet from "./Greet";
import ProductList from "./ProductList"
import ProjectList from "./Assignment2/ProjectList"

function App() {
  // console.log("list = ", productList);
  return (
    <div className="App">
      {/* <Greet name={"Dev"} surname={"Prad"}/> */}
      <ProjectList />
      {/* {productList.map((product) => <h5>{product.name}</h5>)} */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <a href></a>
    </div>
  );
}

export default App;
