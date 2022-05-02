import "./App.css";

import { useState } from "react";

function App() {
  const [display, setDisplay] = useState();

  class Audio {
    constructor(key, url, character, name) {
      (this.key = key),
        (this.url = url),
        (this.character = character),
        (this.name = name);
    }
  }

  const Heater1 = new Audio(
    81,
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "Q",
    "Heater1"
  );
  const Heater2 = new Audio(
    87,
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "W",
    "Heater2"
  );
  const Heater3 = new Audio(
    69,
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "E",
    "Heater3"
  );
  const Heater4 = new Audio(
    65,
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "A",
    "Heater4"
  );
  const Clap = new Audio(
    83,
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "S",
    "Clap"
  );
  const Open_HH = new Audio(
    68,
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "D",
    "Open_HH"
  );
  const Kick_HH = new Audio(
    90,
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "Z",
    "Kick_HH"
  );
  const Kick = new Audio(
    88,
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "X",
    "Kick"
  );
  const Closed_HH = new Audio(
    67,
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    "C",
    "Closed_HH"
  );

  const audioFiles = [
    Heater1,
    Heater2,
    Heater3,
    Heater4,
    Clap,
    Open_HH,
    Kick_HH,
    Kick,
    Closed_HH,
  ];

  function input(e) {
    for (let i in audioFiles) {
      if (audioFiles[i].key === e.keyCode || audioFiles[i].key === e) {
        document.getElementById(`${audioFiles[i].character}`).play();
        setDisplay(audioFiles[i].name);
      }
    }
  }

  window.addEventListener("keydown", (e) => input(e));

  return (
    <main>
      <div id="drum-machine">
        <div id="keypad">
          <button className="drum-pad" onClick={() => input(Heater1.key)}>
            <h2>Q</h2>
            <audio src={Heater1.url} className="clip" id="Q"></audio>
          </button>
          <button className="drum-pad" onClick={() => input(Heater2.key)}>
            <h2>W</h2>
            <audio src={Heater2.url} className="clip" id="W"></audio>
          </button>
          <button className="drum-pad" onClick={() => input(Heater3.key)}>
            <h2>E</h2>
            <audio src={Heater3.url} className="clip" id="E"></audio>
          </button>
          <button className="drum-pad" onClick={() => input(Heater4.key)}>
            <h2>A</h2>
            <audio src={Heater4.url} className="clip" id="A"></audio>
          </button>
          <button className="drum-pad" onClick={() => input(Clap.key)}>
            <h2>S</h2>
            <audio src={Clap.url} className="clip" id="S"></audio>
          </button>
          <button className="drum-pad" onClick={() => input(Open_HH.key)}>
            <h2>D</h2>
            <audio src={Open_HH.url} className="clip" id="D"></audio>
          </button>
          <button className="drum-pad" onClick={() => input(Kick_HH.key)}>
            <h2>Z</h2>
            <audio src={Kick_HH.url} className="clip" id="Z"></audio>
          </button>
          <button className="drum-pad" onClick={() => input(Kick.key)}>
            <h2>X</h2>
            <audio src={Kick.url} className="clip" id="X"></audio>
          </button>
          <button className="drum-pad" onClick={() => input(Closed_HH.key)}>
            <h2>C</h2>
            <audio src={Closed_HH.url} className="clip" id="C"></audio>
          </button>
        </div>
        <div id="display">
          <h1>{display}</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
