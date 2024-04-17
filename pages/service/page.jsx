import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SalaryInfo from '../../components/SalaryInfo';
import YearsCheckboxes from '../../components/YearsCheckboxes';
import Image from 'next/image';
import bg from '../../public/bg2.jpg'

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Image className='w-full h-full absolute' src={bg} alt="/" />
      <div className="container mx-auto py-24  ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div>
            
              <YearsCheckboxes />
          </div>
          <div>
           
          <SalaryInfo />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
