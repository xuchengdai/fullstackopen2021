import React, { useState } from "react";
import Person from "./Person";

const Filter = (props) => {
  const [result, setResult] = useState([]);

  return (
    <div>
      filter shown with {<input onChange={props.handleSearchChange} />}
      <div>
        {props.result.map((person) => (
          <Person person={person} key={person.name} />
        ))}
      </div>
    </div>
  );
};
export default Filter;
