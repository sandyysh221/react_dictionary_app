import React from "react";
import "./Synonyms.css";

function Synonyms({ synonyms }) {
  if (synonyms) {
    return (
      <ul className="Synonyms">
        {synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}

export default Synonyms;
