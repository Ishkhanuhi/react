import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: 'aaa', name: 'Max', age: 23},
      { id: 'bbb', name: 'Manu', age: 12},
      { id: 'ccc', name: 'Ann', age: 13}
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { 
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

  let persons = null;
  
  if(this.state.showPersons) {
    persons = (
      <div>
        <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}/>
      </div>
    );
    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'coral',
      color: 'black'
    };
  }
    return (
      <div className="App">
        <h1>Test React App</h1>
        <p>Working </p>
        <button 
          style = {style}
          onClick = {this.toggleNameHandler}> Show Names
        </button>
        {persons} 
      </div>
    );
  }
}

export default Radium(App);