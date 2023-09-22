import React from "react";
import Navbar1 from "./navbar1";
import Navbar from "./navbar";
import DonateHead from "./donateHead";
import Donatepayment from "./donatepayment";
import Footer from "./footer";
import Donateabout from "./donateabout";

export default function Donate() {
  return (
    <div>
      <Navbar1 />
      <Navbar />
      <DonateHead />
      <Donatepayment />
      <Donateabout />
      <Footer />
    </div>
  );
}
