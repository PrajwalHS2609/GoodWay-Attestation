import React, { useState } from "react";
import "./TrackStatus.css";
import Review from "../Review/Review";
import { Helmet } from "react-helmet";
import axios from "axios";

const TrackStatus = () => {
  const [trackData, setTrackData] = useState({
    trackId: "",
  });
  const { trackId } = trackData;

  const handleData = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setTrackData({ ...trackData, [name]: value });
  };

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!trackId) {
      alert("Please enter a valid Track ID.");
      return;
    }
    try {
      const { data } = await axios.post(
        "https://goodwayattestation.com/crm/api/get-track-data",
        { track_no: trackId }
      );
      alert("Successfully fetched data");
      console.log(data);
    } catch (error) {
      alert("Failed to fetch data");
      console.error("Error:", error);
      if (error.response) {
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
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
          href="https://goodwayattestation.com/track-status"
        />
      </Helmet>
      <div className="trackStatusHeader">
        <h2>Track your application status</h2>
        <p>You will be able to track your order by using the form below.</p>
      </div>
      <form onSubmit={handleTrack}>
        <input
          type="text"
          placeholder="TRACK ID"
          onChange={handleData}
          value={trackId}
          name="trackId"
        />
        <button type="submit">Track</button>
      </form>
      <Review />
    </div>
  );
};

export default TrackStatus;
