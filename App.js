import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Navbar1 from "./components/navbar1";
import Home from "./components/home";
import Footer from "./components/footer";
import Explore from "./components/explore";
import Email from "./components/email";
import AboutUs from "./components/aboutUs";
import Donate from "./components/Donate";
import Professor from "./components/professors";
import AboutUsIcon from "./components/aboutusicon";
import Researchicon from "./components/researchicon";
import Profile from "./components/profile";

function App() {
  return (
    <>
      <Navbar1 />
      <Navbar />
      <Home />
      <Explore />
      <Email />
      <Footer />
      <AboutUs />
      <Donate />
      <Professor />
      <AboutUsIcon />
      <Researchicon />
      <Profile />
    </>
  );
}

export default App;
