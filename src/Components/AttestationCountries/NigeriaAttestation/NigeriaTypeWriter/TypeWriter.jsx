import React from "react";
import Typewriter from "typewriter-effect";
import "./../../UaeAttestation/TypeWriter/TypeWriter.css";
const TypeWriter = () => {
  return (
    <div className="typeWriterContainer">
      <h2>
        <span>Nigeria Embassy Attestation</span>
        <Typewriter
          options={{
            strings: [
              "Only in 5 Days",
              "For Degree Certificate",
              "For Marriage Certificate",
              "For Birth Certificate",
              "For Commercial Documents",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </div>
  );
};

export default TypeWriter;
