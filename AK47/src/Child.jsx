import React, { Component } from 'react'

export default class Child extends Component {
  render() {
  //  console.log(this.props.pass);
    return (
      <div>
        <h1>Child</h1>
        <h3>{this.props.pass}</h3>

      </div>
    )
  }
}
