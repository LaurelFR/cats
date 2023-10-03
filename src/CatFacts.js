import React, { useState } from "react";
import axios from "axios";
import "./CatFacts.css";

export default function CatFacts() {
  const [active, setActive] = useState(false);
  const [fact1, setFact1] = useState("");
  const [fact2, setFact2] = useState("");
  const [fact3, setFact3] = useState("");

  function handleResponse(response) {
    console.log(response.data.data);
    setFact1(response.data.data[0]);
    setFact2(response.data.data[1]);
    setFact3(response.data.data[2]);
  }

  function getFacts() {
    let apiUrl = `https://meowfacts.herokuapp.com/?count=3`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleClick(event) {
    event.preventDefault();
    setActive(true);
    getFacts();
  }

  if (active) {
    return (
      <div className="CatFacts">
        <div className="d-flex justify-content-center">
          <button className="btn fact-button" onClick={handleClick}>
            Generate cat facts!
          </button>
        </div>
        <h2>{fact1}</h2>
        <h2>{fact2}</h2>
        <h2>{fact3}</h2>
      </div>
    );
  } else
    return (
      <div className="CatFacts">
        <div className="d-flex justify-content-center">
          <button className="btn fact-button" onClick={handleClick}>
            Generate cat facts!
          </button>
        </div>
      </div>
    );
}
