

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Ahmed", age: 22 },
      { name: "Ibra", age: 25 },
      { name: "Hassan", age: 27 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    let persons = this.state.persons;
    persons.slice(personIndex, 1);

    this.setState({persons: persons});
  }

  // responsible for change name of first card by listening to the event 
  changeNameHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: event.target.value, age: 22 },
          { name: "Ibra", age: 25 },
          { name: "Hassan", age: 27 }
        ]
      }
    );
  }

  // responsible for toggle diplay of person cards
  togglePersonsHandler = () => {
    const display = this.state.showPersons;
    this.setState({ showPersons: !display })
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            change={this.changeNameHandler} />
        })
      );
    }
    return (
      <div className="App">
        <h1>Always say Hola</h1>
        <button className="Trigger" onClick={this.togglePersonsHandler}>Toggle Cards</button>
        {persons}
      </div>
    )
  };
}

export default App;