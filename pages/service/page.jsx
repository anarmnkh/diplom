import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicesPage from "../../components/Service";

import Image from "next/image";

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <ServicesPage/>
      <Footer />
    </div>
  );
}
