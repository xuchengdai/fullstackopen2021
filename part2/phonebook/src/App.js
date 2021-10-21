import React, { useState } from "react";
import Person from "./components/Person";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonFrom from "./components/PersonForm";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [result, setResult] = useState([]);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    persons.find((person) => person.name === newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObject));

    setNewName("");
  };
  const handleSearchChange = (event) => {
    if (event.target.value !== "") {
      setResult(
        persons.filter((person) =>
          person.name.toUpperCase().includes(event.target.value.toUpperCase())
        )
      );
    } else {
      setResult([]);
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        result={result}
        persons={persons}
        handleSearchChange={handleSearchChange}
      />
      <h3>Add a new</h3>
      <PersonFrom
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
