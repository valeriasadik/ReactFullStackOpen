import React, { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Part1 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allComents, setAllComments] = useState([]);

  const feedBackGood = () => {
    setGood(good + 1);
    setAllComments(allComents);
  };
  const feedBackNeutral = () => {
    setNeutral(neutral + 1);
    setAllComments(allComents);
  };

  const feedBackBad = () => {
    setBad(bad + 1);
    setAllComments(allComents);
  };

  const Statistic = ({ text, value }) => {
    return (
      <tr>
        <td>
          {text} {value}
        </td>
      </tr>
    );
  };
  const Statistics = () => {
    const total = good + neutral + bad;
    const average = (good * 1 + bad * -1) / total;
    const positive = good * (100 / total);

    if (total === 0) {
      return <div>No feedback given</div>;
    }
    return (
      <div>
        <Statistic text="All" value={total} />
        <Statistic text="Average" value={average} />
        <Statistic text="Positive" value={positive} />
      </div>
    );
  };

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button onClick={feedBackGood} text="Good" />
      <Button onClick={feedBackNeutral} text="Neutral" />
      <Button onClick={feedBackBad} text="Bad" />
      <h1>Statistics</h1>
      <p>
        Good {good} <br />
        Neutral {neutral} <br />
        Bad {bad} <br />
        <Statistics />
      </p>
    </div>
  );
};
export default Part1;
