import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

function Results({ results }) {
  if (results) {
    return (
      <div className="Results">
        <section>
          <h2>{results.word}</h2>
          {results.phonetics.map(function (phonetic, index) {
            return (
              <ul key={index}>
                <Phonetic phonetic={phonetic} />
              </ul>
            );
          })}
        </section>
        {results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
