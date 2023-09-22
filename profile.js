import React from "react";
import Navbar1 from "./navbar1";
import Navbar from "./navbar";
import Footer from "./footer";
import "./profile.css";
export default function Profile() {
  return (
    <>
      <Navbar1 />
      <Navbar />
      <div className="profile-header-img">
        <img src="" alt="" />
        <div className="profile-header-container"></div>
      </div>
      <div className="profile-des">
        <div className="profile-des-head">
          <h4>Rohit Sharma</h4>
          <h6>IIT Professor</h6>
        </div>
        <div className="profile-des-info">
          <div className="profile-des-info1">
            <div className="profile-des-cont"></div>
            <h5>IIT Kharakpur</h5>
          </div>
          <div className="profile-des-info1">
            <div className="profile-des-cont"></div>
            <h5>Imigrom Mediatech</h5>
          </div>
        </div>
      </div>
      <div className="profile-gap1"></div>
      <div className="profile-contact-cont">
        <div className="profile-cont-des">
          <div className="profile-country">
            <h3>India </h3>
            <h2>Contact info</h2>
          </div>
          <div className="profile-cont-des2">
            <h1>Mobile No. +91 98989676548</h1>
            <h1>Mobile No. +91 98989676548</h1>
            <h1>Address: Patna Bihar India 804453</h1>
          </div>
        </div>
        <div className="profile-empty-cont"></div>
      </div>
      <div className="profile-gap1"></div>
      <div className="profile-end-cont">
        <h1>ABOUT</h1>
        <div>
          <p>
            As an esteemed professor at IIT Kharagpur, [Your Name] brings a
            wealth of knowledge and experience to the field of [Your Field of
            Expertise]. With a Ph.D. in [Your Area of Study], [Your Last Name]
            is renowned for groundbreaking research, inspiring students, and
            shaping the future of [Your Field]."
          </p>
        </div>
        <div>
          <p>
            As an esteemed professor at IIT Kharagpur, [Your Name] brings a
            wealth of knowledge and experience to the field of [Your Field of
            Expertise]. With a Ph.D. in [Your Area of Study], [Your Last Name]
            is renowned for groundbreaking research, inspiring students, and
            shaping the future of [Your Field]."
          </p>
        </div>
        <div>
          <p>
            As an esteemed professor at IIT Kharagpur, [Your Name] brings a
            wealth of knowledge and experience to the field of [Your Field of
            Expertise]. With a Ph.D. in [Your Area of Study], [Your Last Name]
            is renowned for groundbreaking research, inspiring students, and
            shaping the future of [Your Field]."
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
