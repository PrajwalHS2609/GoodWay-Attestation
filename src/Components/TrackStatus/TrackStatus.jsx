import React from "react";
import "./TrackStatus.css";
import Review from "../Review/Review";
import { Helmet } from "react-helmet";
const TrackStatus = () => {
  const handleTrack = (e) => {
    e.preventDefault();
  };
  return (
    <div className="trackStatus">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Track Embassy Attestation & Apostille Document Status Online
        </title>
        <meta
          name="description"
          content="Track Embassy Attestation & Apostille Document Status Online. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/track-status"
        />
      </Helmet>
      <div className="trackStatusHeader">
        <h2>Track your application status</h2>
        <p>You will be able to track your order by using the form below.</p>
      </div>
      <form action="" onSubmit={handleTrack}>
        <input type="text" placeholder="TRACK ID" />
        <button type="handleTrack">Track</button>
      </form>
      <Review />
    </div>
  );
};

export default TrackStatus;
