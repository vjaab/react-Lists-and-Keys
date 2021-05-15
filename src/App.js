import React from 'react';
import './style.css';
import Person from './Person';

export default function App() {
  const persons = [
    {
      id: 1,
      name: 'Vijay',
      age: 18,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Kumar',
      age: 19,
      skill: 'Vue'
    },
    {
      id: 3,
      name: 'Mental',
      age: 20,
      skill: 'Angular'
    }
  ];
  const list = persons.map(person => <Person key={person.id} per={person} />);
  return <div>{list}</div>;
}
