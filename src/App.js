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
    ],
    showPersons: true
  };

  togglePersonsHandle = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  nameChangeHandler = event => {
    this.setState({
      persons: [
        {
          name: event.target.value,
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
    });
  };

  render() {
    //Styling scoped to the component and not global
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1> Hello React </h1>
        <button style={style} onClick={() => this.togglePersonsHandle()}>
          Show/Hide Persons
        </button>
        {this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              changed={this.nameChangeHandler}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            >
              I am a children of the Person Component
          </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            // click={this.switchNameHandler.bind(this, "Maximilien")}
            />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
