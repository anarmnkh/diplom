// components/SalaryInfo.js
import React, { useState } from 'react';
import styles from '../styles/components/SalaryInfo.module.css';

const SOCIAL_SECURITY_RATE = 0.135; // Social security contribution rate (13.5%)
const OLD_AGE_PENSION_RATE = 0.1875; // Old age pension rate (0.1875%)

const MAX_SALARIES = {
  2020: 4200000,
  2021: 4200000,
  2022: 4600000,
  2023: 5500000,
  2024: 4620000
};

const SalaryInfo = () => {
  const [monthsWorked, setMonthsWorked] = useState(0);
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

  const [averageSalary, setAverageSalary] = useState(0);
  const [oldAgePension, setOldAgePension] = useState(0);

  const handleMonthsWorkedChange = (e) => {
    const value = parseInt(e.target.value);
    setMonthsWorked(value);
  };

  const handleSalaryChange = (year, value) => {
    let updatedValue = value;

    if (MAX_SALARIES.hasOwnProperty(year) && value > MAX_SALARIES[year]) {
      updatedValue = MAX_SALARIES[year];
    }

    const updatedSalaries = { ...salaries, [year]: updatedValue };
    const updatedSocialSecurity = { ...socialSecurityContributions, [year]: (updatedValue * SOCIAL_SECURITY_RATE).toFixed(2) };
    setSalaries(updatedSalaries);
    setSocialSecurityContributions(updatedSocialSecurity);

    // Calculate average salary
    const totalSalaries = Object.values(updatedSalaries).reduce((total, salary) => total + salary, 0);
    const numMonths = monthsWorked || Object.keys(updatedSalaries).length * 12; // Use monthsWorked if provided, otherwise count from salaries
    const newAverageSalary = totalSalaries / numMonths;
    setAverageSalary(newAverageSalary);

    // Calculate old age pension
    const newOldAgePension = newAverageSalary * OLD_AGE_PENSION_RATE * numMonths;
    setOldAgePension(newOldAgePension);
  };

  return (
    <div className={styles.container}>
      <h2>Salary Information</h2>
      <div>
        <label htmlFor="monthsWorked">Total number of months worked:</label>
        <input
          type="number"
          id="monthsWorked"
          value={monthsWorked}
          onChange={handleMonthsWorkedChange}
        />
      </div>
      <table className={styles.salaryTable}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Salary</th>
            <th>Social Security Contributions</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(salaries).map(([year, salary]) => (
            <tr key={year}>
              <td>{year}</td>
              <td>
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => handleSalaryChange(year, parseFloat(e.target.value))}
                />
              </td>
              <td>{socialSecurityContributions[year]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Average Salary: {averageSalary.toFixed(2)}</h3>
        <h3>Monthly Old Age Pension: {oldAgePension.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default SalaryInfo;
