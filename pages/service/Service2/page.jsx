import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import RetirementAgeCalculator from '../../../components/RetirementAgeCalculator';
import Head from 'next/head';



export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Тэтгэврийн нас тогтоох</title>
      </Head>
      <Navbar />

        <RetirementAgeCalculator/>

      <Footer />
    </div>
  );
}
