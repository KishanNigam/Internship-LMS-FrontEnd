import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true}>DevTernShip</Header>
	    <h1>Kishan Ji</h1>
      </div>
    );
  }
}

export default App;
