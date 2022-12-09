//About JSX 
// JSX stands for JavaScript XML.

// JSX allows us to write HTML in React.

// JSX makes it easier to write and add HTML in React.

// var react=require('react');
// //import React  from 'react';
//  var ReactDOM=require('react-dom');
//  var CreateDOM=require('react-dom')
// //import React from 'react-dom';
// //first method
// ReactDOM.render(<react.Fragment> <h1 id='h1'>KYA DEKHANA HAI</h1> <p> byee</p></react.Fragment> ,document.getElementById('root'))
// //second method
// //react.fragment works same like div
// CreateDOM.render([ <h1 id='h1'>KYA DEKHANA HAI</h1> ,
// <p> byee</p>,
// <h3>byee</h3> ],document.getElementById('root'))

//----------------------//First Task---------------------------------------------------------
// var react=require('react')
// var ReactDOM=require('react-dom')
// ReactDOM.render(<react.Fragment>
//   <h1>Thapa technical netflix pick</h1>
 
//   <p>List of 5 Best series</p>
 

//   <ol>
//            <li>First</li>
//            <li>second</li>
//            <li>Third</li>
//            <li>Fourth</li>
//            <li>Fifth</li>
//   </ol>
// </react.Fragment>,document.getElementById('root'))
//-------------------------Expression in React-------------------------------------------
//We write javascript inside that we write HTML code and then if we want to write javascript inside HTML wE USE Expressions
//javascript->HTML->Javascript
//In curly bracket we can only write Expression /we Curly bracket use for Expression
// var React=require('react')
// var ReactDOM=require('react-dom')
// var CeactDOM=require('react-dom')
// const name='omkar'
// const lname='sonmale'
// ReactDOM.render(<h1>Hi my name is {name} { } {lname}</h1>,document.getElementById('root'))
// CeactDOM.render(<h1>Hi my name is {name +" " +lname}</h1>,document.getElementById('root2'))
//------------Template literals-----------------
//Not Cleared
// Example:-console.log('hi i am ${omkar})
// var React=require('react')
// var ReactDOM=require('react-dom')

// const name='omkar';
// const lname='sonmale';
// ReactDOM.render(<><h1> Hi my name is  {name } {lname}</h1> </>,document.getElementById('root'))
//-------------------2nd Task-----------------------
// var react=require('react')
// var ReactDOM=require('react-dom')

// const name='omkar'
// const Currentdate=new Date().toLocaleDateString();
// const Currenttime=new Date().toLocaleTimeString();
// ReactDOM.render(<div><h1>Hi ,My name is {name} </h1>
//    <h3>Today Date is {Currentdate}</h3>
//    <h3>Current time is {Currenttime}</h3></div>,document.getElementById('root'))
//------------------Studying the jsx attributes-------------------
// using contentEditable i'm editing the content

// var react=require('react')
// var ReactDOM=require('react-dom')
// var img="https://i.pinimg.com/474x/4a/69/56/4a6956101fbb4910e5eab2a6311185a9.jpg"
//  ReactDOM.render(<div><h1 ContentEditable='true'>Now i'm editing the text using this</h1><a href='https://www.google.co.in/imghp' target='blank'>
//  <img src ={img} id='immg'/> </a> </div>,document.getElementById('root'))
import React from "react";
import ReactDOM  from "react-dom";
import './index.css'

ReactDOM.render(<div><h1 >Hello </h1> <fieldset className="field">Tech Road map</fieldset> </div>,document.getElementById('root'))
