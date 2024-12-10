import React from "react";
import { Component } from "react";
import Login from "./Login";
import { useState } from "react";

import Parent from "./Parent";
import Filter from "./Filter";
import FilterPrice from "./FilterPrice";

export class Govind extends Component {
  render() {
    return (
      <>
        <h5>Other Component</h5>
      </>
    );
  }
}

// function base Components MyChild
export function MyChild() {
  const [value, setvalue] = useState(0);
  function inc() {
    setvalue(value + 1);
  }
  return (
    <>
      <Govind />
      <h3>Count: {value}</h3>
      <button onClick={inc}>Click</button>
      <h2>My Function Child</h2>
    </>
  );
}

// class base Component App
function App() {
  return (
    <div>
      {/* <Login/>
       <MyChild/>

      <hr/>
       
        <Parent/> */}
      {/* <Filter /> */}
      <FilterPrice />
    </div>
  );
}
export default App;
