import React, { useState } from "react";
import "./TrackStatus.css";
import Review from "../Review/Review";
import { Helmet } from "react-helmet";
import axiosInstance from "../Helper/axiosInstance";
const TrackStatus = () => {
  let [trackData, setTrackData] = useState({
    trackId: "",
  });
  let { trackId } = trackData;

  let handleData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setTrackData({ ...trackData, [name]: value });
  };
  let handleTrack = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        trackId,
      };
      let {data} = await axiosInstance.post(`/crm/api/get-track-data`, payload);
      alert("Successfully");
      console.log(data);
    } catch {
      alert("Failed");
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
          href="https://goodway-attestation.com/track-status"
        />
      </Helmet>
      <div className="trackStatusHeader">
        <h2>Track your application status</h2>
        <p>You will be able to track your order by using the form below.</p>
      </div>
      <form action="" onSubmit={handleTrack}>
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
