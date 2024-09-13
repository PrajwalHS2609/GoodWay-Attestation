import React from "react";
import Typewriter from "typewriter-effect";
import "./TypeWriter.css";
const TypeWriter = (props) => {
  return (
    <div className="birthTypeWriterContainer">
      <h2>
        <span>{props.txt}</span>
        <Typewriter
          options={{
            strings: ["Bangalore", "Mysore", "Chennai"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </div>
  );
};

export default TypeWriter;
