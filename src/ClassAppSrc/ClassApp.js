/* 
This file is a stand-in for a Class-based app.  If substituting your own app, change the package name to be a name distinct from the hooks app (it's currently imported by ParentApp.js as ClassApp), as both will be im
*/

import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1>I'm the class app</h1>
      </div>
    );
  }
}
export default App;
