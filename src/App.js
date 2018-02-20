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

  switchNameHandler = newName => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 30
        },
        {
          name: "Max",
          age: 29
        },
        {
          name: "Sabrina",
          age: 23
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Hello React </h1>
        <button onClick={() => this.switchNameHandler("Viallon")}>
          Switch Name
        </button>
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
          click={this.switchNameHandler.bind(this, "Maximilien")}
        />
      </div>
    );
  }
}

export default App;
