import React from "react";
import "./navbar.css";
export default function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <nav className="navbar">
          <ul>
            <li>
              <a>
                <img src="" alt="" />
              </a>
            </li>
            <li>
              <a className="active" href="/">
                RITAMBHARA
              </a>
            </li>

            <li>
              <a href="/">ABOUT US</a>
              <a href="/">
                <i class="fa-regular fa-play fa-rotate-90"></i>
              </a>
            </li>
            <li>
              <a href="/">RESEARCH</a>
              <a href="/">
                <i class="fa-regular fa-play fa-rotate-90"></i>
              </a>
            </li>

            <li>
              <a href="/">DONATE</a>
            </li>

            <li>
              <a href="/">STORE</a>
            </li>
            <li>
              <a href="/">NEWSLETTER</a>
            </li>
            <li>
              <a href="/">FAQS</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
