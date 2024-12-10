
function x(){
console.log("innter");
}

async function y() {
    const res = x();
    return res;
    
}
y();

// it is a feature of reactJS
// it is replic of real DOM
// it is JS Object
// it is rendered on the UI

// if we make any changes of UI. directly virtual dom will effected.
// both virtual DOM and real DOM kept in as the process called reconcilation.
// reconcilation process can be achived throuth an alogirthic where in internalu check patch , 

// the process of updating missing nodes is called as destin 

// it contant development dependency and it will provide dummy server.
// we required node modules in the time of development and deployment.

// Package-lock.json -> 
// it is refered by browser and act as a backup file
// it consist of all dependencys and librarys along with the version

// package.json ->  
// it contant meta information
// it is like a hart of react application

// node-modules ->
// it contains developement dependancy and it will provides dummy data
// we required node-module in the time of development and deployment

// connect -> 

// import React from "react";
// import {createRoot} from "react-dom/client";

// createRoot(document.getElementById("root")).render(
// <h1>Hello</h1>
//)

// create Root ->  let you to create a root to display react components inside the browsers DOM.
// create root should be imported 
// ex- import {createRoot} from "react-dom/client";

// render -> it is a method to display react component on the web page.
// JSX -> 
// JSX stand for javascript XML
// it is use to create component
// in jsx we can write HTML & JS code.
// JSX is a template language of ReactJS
// ReactJS we understand only JSX but browser will not understand JSX should to convert JSX into any browser understandable formate we use bable.js
// BableJS is a nextJS compiler
// write a different between JSX

// rules of JSX ->1. it elements are more then one it should be wrap within the parent tag
/*
 ex- 
 <div>
    <h1>hello</h1>
    <h1>Hii</h1>
 </div>
 */
// 2. to avoid extra node we use react figment or empty figment
// 3. JSX expration
// <h1>{2 + 2}</h1>
// <h1> 2 + 2 </h1>

// component -> component

// 1. it is UI block
// 2. it is independ form other component
// 3. it is re-usable components


// we can create components in two ways
// 1. CBC -> class base components
// 2. FBC -> function base components
// function base components two types -> 1. function and arrow function

// props -> 
// 1. props are use to transfar the data from one component to another components
// 2. props is a JS Object.
// 3. props are immutable in nature
// 4. props follow uni direction 
// 5. props is like a attributes
// 6. props are present in both CBC and FBC
