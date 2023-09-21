import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Navbar1 from "./components/navbar1";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar1 />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
