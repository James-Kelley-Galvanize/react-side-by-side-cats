import React from "react";
import ReactDOM from "react-dom";
import "./Dont_Edit_These_Styles.css"; // Don't edit these styles, they're for the side-by-side setup
import "./Shared_Styles.css"; // This css file is shared by both apps - YOUR STYLES GO HERE
import ClassApp from "./ClassAppSrc/ClassApp";
import HooksApp from "./HooksAppSrc/HooksApp";

ReactDOM.render(
  <React.StrictMode>
    {/* <div className="parent-app">
      <div className="parent-title-bar">
        <h1 className="parent-column parent-title-left">CLASS</h1>
        <h1 className="parent-column parent-title-right">HOOKS</h1>
      </div>
      <div className="parent-column parent-left-side">
        <ClassApp />
      </div>
      <div className="parent-column parent-right-side">
        <HooksApp />
      </div>
    </div> */}
    <div id="container">
      <h2 id="class-header">Class App</h2>
      <div id="class-app">
        <ClassApp />
      </div>
      <h2 id="hooks-header">Hooks App</h2>
      <div id="hooks-app">
        <HooksApp />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
