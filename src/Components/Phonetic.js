import React from "react";
import "./Phonetic.css";

function Phonetic({ phonetic }) {
  function handleListen(event) {
    let audio = phonetic.audio;
    const audioSound = new Audio(audio);
    audioSound.play();
  }

  if (phonetic.audio) {
    return (
      <li className="Phonetic">
        <span onClick={handleListen}>🔊</span>{" "}
        <span className="text">{phonetic.text}</span>
      </li>
    );
  }
}

export default Phonetic;
