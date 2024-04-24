import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import RetirementAgeCalculator from '../../../components/RetirementAgeCalculator';




export default function Dashboard() {
  return (
    <div>
      <Navbar />

        <RetirementAgeCalculator/>

      <Footer />
    </div>
  );
}
