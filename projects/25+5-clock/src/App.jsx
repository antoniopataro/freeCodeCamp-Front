import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(2);
  const [sessionLength, setSessionLength] = useState(5);

  const [timerStatus, setTimerStatus] = useState("Session");

  const [isPlaying, setIsPlaying] = useState(false);

  const [clockCount, setClockCount] = useState();
  const [clockDisplay, setClockDisplay] = useState();

  const [loop, setLoop] = useState();

  const audio = document.getElementById("beep");

  useEffect(() => {
    let minutes = Math.floor(clockCount / 60);
    let seconds = clockCount % 60;

    // minutes = minutes < 10 ? `0${minutes}` : minutes;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // seconds = seconds < 10 ? `0${seconds}` : seconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    setClockDisplay(`${minutes}:${seconds}`);
  }, [clockCount]);

  useEffect(() => {
    if (clockDisplay === "00:00") {
      playAudio();
      changeStatus();
    }
  }, [clockCount]);

  useEffect(() => {
    setClockCount(breakLength * 60);
    setClockCount(sessionLength * 60);
  }, [breakLength, sessionLength]);

  const playAudio = () => {
    audio.volume = 0.1;
    audio.play();
  };

  const changeStatus = () => {
    if (timerStatus === "Session") {
      setTimerStatus("Break");
      setClockCount(breakLength * 60);
    } else {
      setTimerStatus("Session");
      setClockCount(sessionLength * 60);
    }
  };

  function handleTimer() {
    handleIsPlaying();

    if (isPlaying === true) {
      clearInterval(loop);
    } else {
      setLoop(
        setInterval(() => {
          setClockCount((e) => e - 1);
        }, 10)
      );
    }
  }

  const handleIsPlaying = () => {
    if (isPlaying === false) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  function handleReset() {
    clearInterval(loop);

    setBreakLength(5);
    setSessionLength(25);

    setTimerStatus("Session");

    setIsPlaying(false);

    setClockCount(25 * 60);

    audio.pause();
    audio.currentTime = 0;
  }

  function handleInput(type, value) {
    if (isPlaying) {
      return;
    }
    if (type === "break") {
      if (value === "decrease" && canDecrease(breakLength)) {
        setBreakLength(() => breakLength - 1);
      }

      if (value === "increase" && canIncrease(breakLength)) {
        setBreakLength(() => breakLength + 1);
      }
    }

    if (type === "session") {
      if (value === "decrease" && canDecrease(sessionLength)) {
        setSessionLength(() => sessionLength - 1);
      }

      if (value === "increase" && canIncrease(sessionLength)) {
        setSessionLength(() => sessionLength + 1);
      }
    }
  }

  const canDecrease = (element) => {
    if (element < 2) {
      return false;
    }
    return true;
  };

  const canIncrease = (element) => {
    if (element > 59) {
      return false;
    }
    return true;
  };

  return (
    <main>
      <div id="container">
        <div>
          <h1>25+5 Clock</h1>
        </div>

        <section id="settings">
          <div id="break-wrapper" className="columnWrapper">
            <div id="break-label">Break Length</div>
            <div className="rowWrapper">
              <button
                id="break-decrement"
                onClick={() => handleInput("break", "decrease")}
              >
                Decrement
              </button>
              <div id="break-length">{breakLength}</div>
              <button
                id="break-increment"
                onClick={() => handleInput("break", "increase")}
              >
                Increment
              </button>
            </div>
          </div>
          <div id="session-wrapper" className="columnWrapper">
            <div id="session-label">Session Length</div>
            <div className="rowWrapper">
              <button
                id="session-decrement"
                onClick={() => handleInput("session", "decrease")}
              >
                Decrement
              </button>
              <div id="session-length">{sessionLength}</div>
              <button
                id="session-increment"
                onClick={() => handleInput("session", "increase")}
              >
                Increment
              </button>
            </div>
          </div>
        </section>

        <section id="timer">
          <div id="timer-label">
            <h1>{timerStatus}</h1>
          </div>
          <div id="time-left">{clockDisplay}</div>

          <div className="rowWrapper">
            <button id="start_stop" onClick={handleTimer}>
              Start/Stop
            </button>
            <button id="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </section>
        <audio
          id="beep"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ></audio>
      </div>
    </main>
  );
}

export default App;
