import React from "react";
import Meaning from "./Meaning";

function Results({ results }) {
  if (results) {
    return (
      <div className="Results">
        <h2>{results.word}</h2>
        {results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
