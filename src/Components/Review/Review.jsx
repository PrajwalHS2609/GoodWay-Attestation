import React, { useEffect } from "react";
import "./Review.css";
import ReviewsHeading from "./ReviewsHeading";
const Review = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <ReviewsHeading />
      <div className="reviewsContainer">
        <div className="reviewsContent">
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25465825"
            frameborder="0"
            width="100%"
            height="1000"
            title="google reviews"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Review;
