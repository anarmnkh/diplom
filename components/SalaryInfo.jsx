import React, { useState } from 'react';

const SOCIAL_SECURITY_RATE = 0.135;
const PensionRate = 0.001875;

const MAX_SALARIES = {
  2020: 4200000,
  2021: 4200000,
  2022: 4600000,
  2023: 5500000,
  2024: 4620000
};

const MAX_SOCIALSECURITY = {
  2020: 567000,
  2021: 567000,
  2022: 621000,
  2023: 742500,
  2024: 623700
}

const SalaryInfo = () => {
  const [salaries, setSalaries] = useState({
    2020: 0,
    2021: 0,
    2022: 0,
    2023: 0,
    2024: 0
  });

  const [socialSecurityContributions, setSocialSecurityContributions] = useState({
    2020: 0,
    2021: 0,
    2022: 0,
    2023: 0,
    2024: 0
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
    <div className="container mx-auto py-8 rounded-md shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Salary Information</h2>
      <div className="mb-4">
        <label htmlFor="totalMonthsInput" className="block text-sm">Total Months of Social Security Contributions:</label>
        <input
          id="totalMonthsInput"
          type="number"
          value={totalMonthsOfSocialSecurity}
          onChange={(e) => setTotalMonthsOfSocialSecurity(parseInt(e.target.value))}
          className="border border-gray-300 rounded-md py-2 px-3 mt-1 block w-full focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="text-left py-2">Year</th>
            <th className="text-left py-2">Salary</th>
            <th className="text-left py-2">Social Security Contributions</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(salaries).map(([year, salary]) => (
            <tr key={year}>
              <td className="border px-4 py-2">{year}</td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => handleSalaryChange(year, parseFloat(e.target.value))}
                  className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </td>
              <td className="bo rder px-4 py-2">{socialSecurityContributions[year]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-center">Average Salary: {averageSalary.toFixed(2)}</h3>
        <h3 className="text-xl font-semibold text-center">Pension: {pension}</h3>
      </div>
    </div>
  );
};

export default SalaryInfo;
