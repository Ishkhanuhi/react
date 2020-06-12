import React from 'react';
import Person from './Person/Person';

const persons = (props) => persons.map((person, i) => {
    return <Person 
      key = {person.id}
      name = {person.name} 
      age = {person.age}
      click = {() => props.click(i)}
      changed = {(event) => this.changed(event,person.id)}/>
  });

  export default persons;