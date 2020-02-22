import React, { Component } from "react";
import Person from "./Person/Person.js";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "tok", age: 22 },
      { name: "nik", age: 21 },
      { name: "lan", age: 11 }
    ]
  };

  switchName = arg => {
    this.setState({
      persons: [
        { name: arg, age: 22 },
        { name: "ნიკ", age: 21 },
        { name: "ლან", age: 11 }
      ]
    });
  };
  changeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 22 },
        { name: "ნიკ", age: 21 },
        { name: "ლან", age: 11 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi am torn</h1>
        <button onClick={() => this.switchName("maximilian")}>
          Switch Name
        </button>
        <Person
          change={this.changeHandler}
          clicker={this.switchName}
          name={this.state.persons[0].name}
        >
          Bla
        </Person>
        <Person name={this.state.persons[1].name}>Bla</Person>
      </div>
    );
  }
}

export default App;
