import React, { useState } from "react";
import "./TrackStatus.css";
import Review from "../Review/Review";
import { Helmet } from "react-helmet";
import axios from "axios";

const TrackStatus = () => {
  const [trackData, setTrackData] = useState({ trackId: "" });
  const { trackId } = trackData;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);

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
    setLoading(true);
    setError(""); // Clear previous error
    try {
      const { data } = await axios.post(
        "https://goodwayattestation.com/crm/api/get-track-data",
        { track_no: trackId }
      );
      setTrackingInfo(data); // Store API response in state
      alert("Successfully fetched data");
      console.log(data);
    } catch (error) {
      setError("Failed to fetch data. Please try again later.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
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
        <button type="submit" disabled={!trackId || loading}>
          {loading ? "Loading..." : "Track"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {trackingInfo && (
        <div className="trackingResult">
          <h3>Tracking Details</h3>
          <p>
            <strong>Customer Name:</strong> {trackingInfo.customer_name}
          </p>
          <p>
            <strong>Date:</strong> {trackingInfo.date}
          </p>
          <p>
            <strong>Attestation Type:</strong> {trackingInfo.attestation_type}
          </p>
          <p>
            <strong>Apostille:</strong> {trackingInfo.apostille}
          </p>
          <p>
            <strong>Apostille Yes:</strong> {trackingInfo.apostille_yes}
          </p>
          <p>
            <strong>Status:</strong> {trackingInfo.status}
          </p>
        </div>
      )}
      <Review />
    </div>
  );
};

export default TrackStatus;
