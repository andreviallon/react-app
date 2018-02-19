import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Andre",
        age: 22
      },
      {
        name: "Max",
        age: 21
      },
      {
        name: "Sabrina",
        age: 21
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1> Hello React </h1> <button> Switch Name </button>{" "}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
