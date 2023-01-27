import React from "react";
import { Component } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from './Profile';

const About2 = () => {
    return (
      <div className="container">
        <h1>About page</h1>
        <p>This is the Namaste React Live Course Chapter 07 - Finding the Path.</p>
        <Profile name="Jeet Chaudhary from Class"/>
        <ProfileFunctionalComponent name="Jeet Chaudhary"/>
      </div>
    )
  }

  class About extends Component {
    constructor(props) {
      super(props);
      // console.log("Parent - constructor")
    }

    componentDidMount() {
      // console.log("Parent - componentDidMount");
    }

    render() {
    // console.log("Parent - render");
      return (
        <div className="container">
          <h1>About page</h1>
          <p>This is the Namaste React Live Course Chapter 07 - Finding the Path.</p>
          <Profile />
          <ProfileFunctionalComponent name="Jeet Chaudhary"/>
        </div>
      )
    }
  }
  
  export default About;

  /*
    Parent Constructor
    Parent Render
      First Child Contructor
      First Child Render
      Second Child Contructor
      Second Child Render
      First Child componentDidMount
      Second Child componentDidMount
    Parent componentDidMount
  */