import React from "react";
import Typewriter from "typewriter-effect";
import "./TypeWriter.css";
const TypeWriter = () => {
  return (
    <div className="typeWriterContainer">
      <h2>
        <span>
          Welcome to <br /> Goodway Attestation
        </span>
        <Typewriter
          options={{
            strings: [
              "For Attestation in 5 Days",
              "For Apostille in 3 Days",
              "For HRD in 7 Days",
              "For Competitve Price",
              "One of Trusted Brand",
              "A Govt Approved",
              "A ISO Certified",
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
