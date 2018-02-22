import React, { Component } from "react";
import classes from "./App.css";
// import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    // ":hover": {
    //   backgroundColor: "lightgreen",
    //   color: "black"
    // }
    // };

    //Add css classes conditionally 
    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ["red", "bold"]
    }

    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangeHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = classes.Red;

    }

    return (
      // <StyleRoot>
      <div className={classes.app}>
        <h1> Hello React </h1>
        <p className={assignedClasses.join(" ")} >This is really working!</p>
        <button
          className={btnClass}
          onClick={() => this.togglePersonsHandle()}
        >
          Show/Hide Persons
        </button>
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

export default App;
// export default Radium(App);
