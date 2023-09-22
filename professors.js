import React from "react";
import Navbar1 from "./navbar1";
import Navbar from "./navbar";
import Footer from "./footer";
import ProfessorHead from "./professorHead";

export default function Professor() {
  return (
    <>
      <Navbar1 />
      <Navbar />
      <ProfessorHead />
      <Footer />
    </>
  );
}
