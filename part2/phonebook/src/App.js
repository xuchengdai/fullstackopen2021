import React, { useState } from "react";
import Person from "./components/person";
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

  // const [search, setSearch] = useState("");
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
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with {<input onChange={handleSearchChange} />}
        <div>
          {result.map((person) => (
            <Person person={person} key={person.name} />
          ))}
        </div>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person person={person} key={person.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
