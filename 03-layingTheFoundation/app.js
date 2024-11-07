import React from "react";
import ReactDOM from "react-dom/client";

// React using normal javascript
const heading = React.createElement("h1", { id: "heading" }, "hello world");

// React using JSX
const jsxHeading = <h1 className="heading">hello world using jsx</h1>;

/**
 * React components
 * 1) class based component.
 * 2) functional component.
 */

// Functional component...
const TitleComponent = ()=>{
  return (
    <div id="title">
      <h1>hello from TitleComponent</h1>
    </div>
  );
};

let randomNumber = 10000;
// component composition...
const HeadingComponent = function () {
  return (
    <div id="container">
      {/* <TitleComponent /> */}
      {TitleComponent()}
      {randomNumber}
      {100+200}
      {console.log('hello dennis')}
      <h1>hello world from functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
