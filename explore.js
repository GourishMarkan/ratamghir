import React from "react";
import "./explore.css";
export default function Explore() {
  return (
    <>
      <div className="explore-heading">
        <p>
          Elevate Your Capacity. Deepen Your Discovery.
          <br></br>
          Experience Ritambhara Today.
        </p>
      </div>
      <div className="container"></div>
      <div className="explore-des-container">
        <div className="explore-des">
          <div className="container-lay"></div>
          <h2 className="explore-h2">Experiential Programs</h2>
          <p className="explore-p">
            Develop skills to transform yourself and impact the world.
          </p>
          <h4 className="explore-h4">LEARN MORE</h4>
        </div>
        <div className="explore-des">
          <div className="container-lay"></div>
          <h2 className="explore-h2">Explore Noetics</h2>
          <p className="explore-p">
            Tools to enhance your understanding, expand your mind, and feed your
            soul.
          </p>

          <h4 className="explore-h4">LEARN MORE</h4>
        </div>
        <div className="explore-des">
          <div className="container-lay"></div>
          <h2 className="explore-h2">Community Groups</h2>
          <p className="explore-p">
            Explore consciousness with like-minded people in your neighborhood.
          </p>
          <h4 className="explore-h4">LEARN MORE</h4>
        </div>
      </div>
    </>
  );
}
