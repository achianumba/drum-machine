import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DrumPad from "./components/DrumPad";
import sounds from "./components/sounds";
import "./components/bootstrap.min.css";
import "./index.css";

const DrumMachine = () => {
  const [sound, setSound] = useState("DrumMachine");

  const padClickHandler = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("drum-pad")) {
      setSound(e.target.id);
      let audio = e.target.childNodes[1];
      playSound(audio);
    }
  };

  const playSound = (audio) => {
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    document.addEventListener("keydown", e => {
      e.preventDefault();
      let pads = sounds.map((s) => s.keyTrigger);
      let letter = String.fromCharCode(e.keyCode).toUpperCase();

      if (pads.includes(letter)) {
        let audio = document.querySelector(`#${letter}`);
        playSound(audio);
      }

    });
  });

  return (
    <React.Fragment>
      <div className="row w-100 mt-3 mb-5">
        <h1 className="col-12 px-2 text-light text-center">
          Drum<span className="text-success">Machine</span>
        </h1>
      </div>

      <div className="row w-100 mt-5 d-flex flex-wrap justify-content-center">
        <div
          id="drum-pads"
          className="p-2 col-sm-10 col-sm-7 col-lg-5 d-flex flex-wrap  justify-content-center"
          onClick={padClickHandler}
        >
          {sounds.map((sound) => {
            return (
              <DrumPad
                key={sound.keyCode}
                padId={sound.id}
                padTrigger={sound.keyTrigger}
                clipUrl={sound.url}
              />
            );
          })}
        </div>

        <div className="col-sm-11 col-md-5 col-lg-5 p-2">
          <h4 id="display" className="mt-1 px-4 py-3 m-100 text-center bg-warning">
            {sound}
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<DrumMachine />, document.getElementById("drum-machine"));
