

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SalaryInfo from "../components/SalaryInfo";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Hero from "../components/Hero";
import News from "../components/News";
import Legal from "../components/News";
import LawPage from "../components/LawPage";
import { useState } from "react";

import ServicesPage from "../components/Service";
import Service1 from "../components/News";


export default function Home() {

  return (
  <div>
    <Navbar/>
    <Hero/>
    <News/>
    
    <Footer/>
  </div>
      
 
  );
}