import React, { useState } from 'react';
import styles from '../styles/components/SalaryInfo.module.css';

const SOCIAL_SECURITY_RATE = 0.135; // нийгмийн даатгалын шимтгэл (13.5%)
const PensionRate = 0.001875; // Pension rate is 0.1875%
//const pension 
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
  const [pension, setPension] = useState(0); // State to hold the calculated pension amount

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



   

    // Calculate average salary
    const totalSalaries = Object.values(updatedSalaries).reduce((total, salary) => total + salary, 0);
    const numYears = Object.keys(updatedSalaries).length;
    const newAverageSalary = totalSalaries / numYears;
    setAverageSalary(newAverageSalary);

    // Calculate total months of social security payments
    //const totalMonths = Object.values(socialSecurityContributions).reduce((total, contribution) => total + parseFloat(contribution) / (value * SOCIAL_SECURITY_RATE), 0);
    //setTotalMonthsOfSocialSecurity(totalMonths);
    // Calculate pension
    const calculatedPension = (newAverageSalary * PensionRate * totalMonthsOfSocialSecurity).toFixed(2);
    setPension(calculatedPension);
  };

  return (
    <div className={styles.container}>
      <h2>Тэтгэвэр төлөвлөлт</h2>
      <div>
        <label htmlFor="totalMonthsInput">Нийгмийн даатгалын шимтгэлийн төлсөн нийт сарын тоо:</label>
          <input
            id="totalMonthsInput"
            type="number"
            value={totalMonthsOfSocialSecurity}
            onChange={(e) => setTotalMonthsOfSocialSecurity(parseInt(e.target.value))}
          />
      </div>
      <table className={styles.salaryTable}>
        <thead>
          <tr>
            <th>Он</th>
            <th>Цалингийн хэмжээ </th>
            <th>Сайн дурын нийгмийн даатгалын шимтгэл</th>
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
        <h3>Дундаж цалин: {averageSalary.toFixed(2)}</h3>
        <h3>% Тэнцүүлсэн тэтгэвэр: {pension}</h3>
        <h3>Бүрэн тэтгэвэр: </h3>
      </div>
    </div>
  );
};

export default SalaryInfo;
