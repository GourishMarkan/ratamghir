import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-description">
          <h3>Get Involved</h3>
          <h3>Volunteer</h3>
          <h3>Careers</h3>
          <h3>Research Participation</h3>
          <h3>Press</h3>
        </div>
        <div className="footer-description">
          <h3>Invest in Ritambhara</h3>
          <h3>Annual Report</h3>
          <h3>Financials</h3>
          <h3>Manage My Donation</h3>
          <h3>Donate Today</h3>
        </div>
        <div className="footer-description">
          <h3>Contact Us</h3>
          <h3>ritambhara@org.com</h3>
          <h3>patna Bihar India</h3>
        </div>
        <div className="footer-logo">
          <img src="./RRIlogo.png" alt="" />
        </div>
      </div>
    </>
  );
}
