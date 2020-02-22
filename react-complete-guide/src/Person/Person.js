import React from "react";
import "./persons.css";
const person = props => {
  return (
    <div className="list">
      <p onClick={props.clicker}>I Am {props.name}</p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default person;
