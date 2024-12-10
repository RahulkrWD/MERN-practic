import React, { Component } from 'react'
import Child from "./Child";
export default class Parent extends Component {
  render() {
    let data = "hello";
    return (
      <div>
        
        <Child pass={data}/>
      </div>
    )
  }
}
