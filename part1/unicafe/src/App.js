import React, { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handler}>{props.buttonText}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};
const Statistics = (props) => {
  if (props.all > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.all / 4} />
        <StatisticLine text="positive" value={props.good / props.all} />
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>no feedback given</p>
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={() => setGood(good + 1)} buttonText="good" />
      <Button handler={() => setNeutral(neutral + 1)} buttonText="neutral" />
      <Button handler={() => setBad(bad + 1)} buttonText="bad" />

      <Statistics good={good} bad={bad} neutral={neutral} all={all} />
    </div>
  );
};

export default App;
