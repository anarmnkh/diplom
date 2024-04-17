

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import SalaryInfo from "../components/SalaryInfo";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Hero from "../components/Hero";
import News from "../components/News";
import Legal from "../components/Legal";
import LawPage from "../components/LawPage";
import { useState } from "react";


export default function Home() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Legal/>
      <News/>
      <Footer />
    </div>
      
   
  );
}