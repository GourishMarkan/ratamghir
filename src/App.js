import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Navbar1 from "./components/navbar1";
import Home from "./components/home";
import Footer from "./components/footer";
import Explore from "./components/explore";
import Email from "./components/email";
import AboutUs from "./components/aboutUs";

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
    </>
  );
}

export default App;
