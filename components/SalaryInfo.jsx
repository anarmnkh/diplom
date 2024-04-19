import React, { useState } from 'react';

const SOCIAL_SECURITY_RATE = 0.135;
const PensionRate = 0.001875;

const MAX_SALARIES = {
  2025: 4200000,
  2026: 4200000,
  2027: 4600000,
  2028: 5500000,
  2029: 4620000
};

const MAX_SOCIALSECURITY = {
  2025: 567000,
  2026: 567000,
  2027: 621000,
  2028: 742500,
  2029: 623700
}

const SalaryInfo = () => {
  const [salaries, setSalaries] = useState({
    2025: 0,
    2026: 0,
    2027: 0,
    2028: 0,
    2029: 0
  });

  const [socialSecurityContributions, setSocialSecurityContributions] = useState({
    2025: 0,
    2026: 0,
    2027: 0,
    2028: 0,
    2029: 0
  });

  const [totalMonthsOfSocialSecurity, setTotalMonthsOfSocialSecurity] = useState(0);
  const [averageSalary, setAverageSalary] = useState(0);
  const [pension, setPension] = useState(0);

  const handleSalaryChange = (year, value) => {
    let updatedSalary = value;
    let updatedSocialSecurity = value * SOCIAL_SECURITY_RATE;
   
    if (value > MAX_SALARIES[year]) {
      updatedSocialSecurity = MAX_SOCIALSECURITY[year];
    }

    const updatedSalaries = { ...salaries, [year]: updatedSalary };
    const updatedSocialSecurityContributions = { ...socialSecurityContributions, [year]: updatedSocialSecurity.toFixed(2) };
    setSalaries(updatedSalaries);
    setSocialSecurityContributions(updatedSocialSecurityContributions);

    const totalSalaries = Object.values(updatedSalaries).reduce((total, salary) => total + salary, 0);
    const numYears = Object.keys(updatedSalaries).length;
    const newAverageSalary = totalSalaries / numYears;
    setAverageSalary(newAverageSalary);

    const calculatedPension = (newAverageSalary * PensionRate * totalMonthsOfSocialSecurity).toFixed(2);
    setPension(calculatedPension);
  };

  return (
    <div className='bg-white mt-16 border-2 rounded-md'>
    <div className="mx-8 py-4 rounded-md  bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Тэтгэвэр тогтоох</h2>
      <div >
        <label htmlFor="totalMonthsInput" className="block text-sm">Нийгмийн даатгал төлсөн нийт сарын тоо :</label>
        <input
          id="totalMonthsInput"
          type="number"
          value={totalMonthsOfSocialSecurity}
          onChange={(e) => setTotalMonthsOfSocialSecurity(parseInt(e.target.value))}
          className="border border-gray-400 rounded-lg py-2 px-16 block w-98 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className=" text-center py-2">Он</th>
            <th className="text-center  py-4 px-6">Жилийн дундаж цалин</th>
            <th className="text-center  py-2 px-2 ">Сайн дурын нийгмийн даатгалын шимтгэл</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(salaries).map(([year, salary]) => (
            <tr key={year} >
              <div className='border border-gray-500 rounded-full'>
                <td className="px-7 py-2 text-center">{year}</td>
              </div>
              
              <td className=" px-4">
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => handleSalaryChange(year, parseFloat(e.target.value))}
                  className="border border-gray-500 rounded-full py-2 px-5 focus:outline-none focus:ring focus:border-blue-500"
                />
              </td>
              <div className="border border-gray-500 rounded-full px-4 py-2 mr-6">{socialSecurityContributions[year]}</div>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-left">Дундаж цалин түүнтэй адилтгах орлого: {averageSalary.toFixed(2)}</h3>
        <h3 className="text-xl font-semibold text-lett">Тэтгэвэрийн хэмжээ: {pension}</h3>
      </div>
    </div>
    </div>
  );
};

export default SalaryInfo;
