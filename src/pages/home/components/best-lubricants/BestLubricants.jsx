import React from "react";
import "./bestLubricants.scss";

function BestLubricants() {
  return (
    <div className="bestlubricants">
      <div className="bestlubricants-wrapper">
        <div className="bestlubricants-text">
          <h2 className="bestlubricants-title">Our Specialty</h2>
          <h3 className="bestlubricants-title-2">
            Only <span>The Best Lubricants</span> For The World
          </h3>
          <p className="bestlubricants-desc">
            By leveraging cutting-edge technology and extensive industry
            knowledge, Hyrax Oil continually develops lubricants that{" "}
            <span>surpass industry standards</span> and consistently deliver{" "}
            <span>superior performance</span>.
          </p>
          <p className="bestlubricants-desc">
            We always ensure our products are engineered to meet our customers’
            expectations, making it the preferred choice for those who demand
            only the best in lubrication.
          </p>
        </div>
        <img className="" src="./carousel-1.jpg" alt="" />
      </div>
    </div>
  );
}

export default BestLubricants;
