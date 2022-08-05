import React from "react";

function Phonetics({ phonetic }) {
  function handleListen(event) {
    let audio = phonetic.audio;
    const audioSound = new Audio(audio);
    audioSound.play();
  }

  if (phonetic.audio) {
    return (
      <div className="Phonetic">
        <span onClick={handleListen}>🔊</span> <span>{phonetic.text}</span>
      </div>
    );
  }
}

export default Phonetics;
