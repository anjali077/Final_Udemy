import React from "react";
import "./Herosection.css";

const Herosection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left Box */}
        <div className="hero-box">
          <h3>24-Hour Flash Sale</h3>
          <p>Learn from real-world experts for as low as ₹449. Sale ends tonight!</p>
          {/* <button>Learn More</button> */}
        </div>

        {/* Main Content */}
        <div className="hero-main">
          {/* <h1>Learn on your schedule</h1>
          <p>Access top courses from anywhere, anytime.</p> */}
          {/* <button className="explore-btn">Explore Courses</button> */}
        </div>
      </div>
    </section>
  );
};

export default Herosection;
