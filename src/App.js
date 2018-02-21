import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "wea", name: "Andre", age: 22 },
      { id: "dwad", name: "Max", age: 21 },
      { id: "awdasda", name: "Sabrina", age: 21 }
    ],
    showPersons: true
  };

  togglePersonsHandle = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHandler = personId => {
    //in this case, the const persons is only a point and does not hold a value, this is why it can change
    // const persons = this.state.persons.slice();
    //ES6 way with spread operators
    //Use it to not mutate the original array or object
    const persons = [...this.state.persons];
    persons.splice(personId, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  render() {
    //Styling scoped to the component and not global
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hello React </h1>
        <button style={style} onClick={() => this.togglePersonsHandle()}>
          Show/Hide Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
