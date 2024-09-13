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
    <ReviewsHeading/>
    <div className="reviewsContainer">
      <div className="reviewsContent">
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>

        <div
          class="elfsight-app-4944966b-46f1-4e5d-bb08-09b3d09c8fae"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
    </>
  );
};

export default Review;
