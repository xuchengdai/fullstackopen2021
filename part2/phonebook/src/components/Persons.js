import React from "react";
import Person from "./Person";

const Persons = (props) => {
  return (
    <div>
      {props.persons.map((person) => (
        <Person person={person} key={person.name} />
      ))}
    </div>
  );
};

export default Persons;
