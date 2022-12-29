import React from "react";
import "./Qoute.css";
function Qoute({ qoute }) {
  console.log(qoute);
  return (
    <div className="Qoutee">
      <div className="anime_name" title={qoute.anime}>
        {qoute.anime}
      </div>
      <div className="Qoutee_text">
        <p className="Text"> {qoute.quote} </p>
      </div>
      <div className="character" title={qoute.character}>
        Character : {qoute.character}
      </div>
    </div>
  );
}

export default Qoute;
