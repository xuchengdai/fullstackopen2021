import React from "react";

const Country = (props) => {
  return (
    <div>
      <h2>{props.country.name}</h2>
      <p>Capital {props.country.capital}</p>
      <h3>Language</h3>
      <ul>
        {props.country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Country;
