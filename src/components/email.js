import React from "react";
import "./email.css";
export default function Email() {
  return (
    <>
      <div className="email-container">
        <div className="email-des">
          <h1>Join Our Global Community</h1>
          <p>
            Receive curated mind-bending, heart-enlivening content. We’ll never
            share your email address and you can unsubscribe any time.
          </p>
        </div>
        <div className="form-container">
          <input type="email" placeholder="Enter Your Email" />
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}
