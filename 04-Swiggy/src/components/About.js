import User from "./User";
import UserClass from "./userClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }

  componentDidMount(){
    console.log("parent component did mount")
  }

  render() {
    console.log("parent render called");
    return (
      <div>
        <h1>Hi</h1>
        <h2>This is a food order application !!!</h2>
        <User name={"Dennis @function"} />

        <UserClass name={"Dennis @class"} location={"Bengaluru @class"} />
      </div>
    );
  }
}

export default About;
