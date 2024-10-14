import React, { useState } from "react";

const TrackData = () => {
  const [trackNumber, setTrackNumber] = useState(""); // Store the input value
  const [trackData, setTrackData] = useState(null); // Store the fetched data
  const [error, setError] = useState(null); // Store any error

  const handleTrack = async () => {
    // Reset data and error before making the request
    setTrackData(null);
    setError(null);

    if (trackNumber) {
      try {
        const response = await fetch(
          "https://goodwayattestation.com/crm/api/get-track-data",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ track_no: trackNumber }), // Send track number in raw JSON
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        setTrackData(data); // Set the fetched data
        console.log("Successfully fetched data", data); // Log the data to console
        setTrackNumber(""); // Clear the input field after successful fetch
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
        console.error("Error:", error);
      }
    } else {
      setError("Please enter a track number");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h3>Track Your Attestation</h3>

      {/* Input box for track number */}
      <input
        type="text"
        value={trackNumber}
        onChange={(e) => setTrackNumber(e.target.value)}
        placeholder="Enter Track Number"
        style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
      />

      {/* Button to trigger the API call */}
      <button onClick={handleTrack} style={{ padding: "10px", width: "100%" }}>
        Track
      </button>

      {/* Displaying error message */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* Displaying fetched data */}
      {trackData && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h4 style={{ width: "100%", textAlign: "center" }}>
            Tracking Details:
          </h4>
          <p>
            <strong>Track Number:</strong> {trackData.track_no}
          </p>
          <p>
            <strong>Customer Name:</strong> {trackData.customer_name}
          </p>
          <p>
            <strong>Date:</strong> {trackData.date}
          </p>
          <p>
            <strong>Attestation Type:</strong> {trackData.attestation_type}
          </p>
          <p>
            <strong>Apostille:</strong> {trackData.apostille}
          </p>
          <p>
            <strong>Apostille Yes:</strong> {trackData.apostille_yes}
          </p>
          <p>
            <strong>Status:</strong> {trackData.status}
          </p>
        </div>
      )}
    </div>
  );
};

export default TrackData;
