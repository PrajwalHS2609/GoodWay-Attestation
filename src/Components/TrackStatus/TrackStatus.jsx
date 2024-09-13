import React from "react";
import "./TrackStatus.css";
import Review from "../Review/Review";
const TrackStatus = () => {
  const handleTrack = (e) => {
    e.preventDefault();
  };
  return (
    <div className="trackStatus">
      <div className="trackStatusHeader">
        <h2>Track your application status</h2>
        <p>You will be able to track your order by using the form below.</p>
      </div>
      <form action="" onSubmit={handleTrack}>
        <input type="text" placeholder="TRACK ID" />
        <button type="handleTrack">Track</button>
      </form>
      {/* <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits /> */}
      <Review />
    </div>
  );
};

export default TrackStatus;
