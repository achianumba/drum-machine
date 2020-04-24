import React from "react";

export default (props) => (
  <div
    id={props.padId}
    className={
      props.padTrigger +
      " drum-pad col-3 m-1 d-inline-block p-4 text-center text-white rounded"
    }
  >
    {props.padTrigger}

    <audio src={props.clipUrl} id={props.padTrigger} className="clip"></audio>
  </div>
);