import React, { Component } from "react";
import Person from "./Person/Person.js";
import UserInput from "./UserInput/UserInput.js";
import UserOutput from "./UserOutput/UserOutput.js";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "tok", age: 22 },
      { name: "nik", age: 21 },
      { name: "lan", age: 11 }
    ],
    showPersons: null
  };

  switchName = arg => {
    const doesShow = this.state.showPersons;
    this.setState({
      persons: [
        { name: "dsa", age: 22 },
        { name: "ნიკ", age: 21 },
        { name: "ნიკ", age: 21 },
        { name: "ლან", age: 11 }
      ],
      showPersons: !this.state.showPersons
    });
  };

  useroutputhandler = event => {
    this.setState({
      persons: [
        { name: "asa", age: 22 },
        { name: "state-nik", age: 21 },
        { name: "state-lan", age: 11 }
      ]
    });
  };

  remolistHandler = index => {
    const persons = this.state.persons;
    this.state.persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((el, index) => {
            if (el.age > 15) {
              return (
                <Person
                  click={() => this.remolistHandler(index)}
                  key={index}
                  name={el.name}
                ></Person>
              );
            }
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi am torn</h1>
        <button onClick={() => this.switchName("maximilian")}>
          Switch Name
        </button>
        {this.state.persons.map((el, index) => {
          return <h1 key={index}>{el.name}</h1>;
        })}
        {persons}
      </div>
    );
  }
}

export default App;
