import React, { useState } from "react";
import CSVReader from "react-csv-reader";

const SOCIAL_SECURITY_RATE = 0.135;
const PensionRate = 0.001875;
const Percentage = 0.45;
const Overtime = 0.00125;

const MAX_SALARIES = {
  2025: 4200000,
  2026: 4200000,
  2027: 4600000,
  2028: 5500000,
  2029: 4620000,
};

const MAX_SOCIALSECURITY = {
  2025: 567000,
  2026: 567000,
  2027: 621000,
  2028: 742500,
  2029: 623700,
};

const SalaryInfo = () => {
  const [salaries, setSalaries] = useState({
    2025: 0,
    2026: 0,
    2027: 0,
    2028: 0,
    2029: 0,
  });

  const [socialSecurityContributions, setSocialSecurityContributions] =
    useState({
      2025: 0,
      2026: 0,
      2027: 0,
      2028: 0,
      2029: 0,
    });

  const [totalMonthsOfSocialSecurity, setTotalMonthsOfSocialSecurity] =
    useState(0);
  const [averageSalary, setAverageSalary] = useState(0);
  const [pension, setPension] = useState(0);

  const handleSalaryChange = (year, value) => {
    const updatedSalaries = { ...salaries, [year]: value };
    setSalaries(updatedSalaries);
  };
  // товчлуур
  const calculate = () => {
    let totalSalaries = 0;
    let totalSocialSecurity = 0;

    for (const year in salaries) {
      totalSalaries += salaries[year];
      totalSocialSecurity +=
        salaries[year] > MAX_SALARIES[year]
          ? MAX_SOCIALSECURITY[year]
          : salaries[year] * SOCIAL_SECURITY_RATE;
    }

    // Дундаж цалин
    const numYears = Object.keys(salaries).length;
    const newAverageSalary = totalSalaries / numYears;
    setAverageSalary(newAverageSalary);

    // Тэтгэвэр тогтоох
    if (totalMonthsOfSocialSecurity < 241) {
      setPension(
        (newAverageSalary * PensionRate * totalMonthsOfSocialSecurity).toFixed(
          2
        )
      );
    } else if (totalMonthsOfSocialSecurity === 241) {
      setPension((newAverageSalary * Percentage).toFixed(2));
    } else {
      setPension(
        (
          newAverageSalary *
          (Percentage + (totalMonthsOfSocialSecurity - 240) * Overtime)
        ).toFixed(2)
      );
    }

    setSocialSecurityContributions(totalSocialSecurity.toFixed(2));
  };

  // csv, txt файл уншина
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return; // No file selected, do nothing
    }

    if (file.type === "text/csv") {
      // Handle CSV file
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const rows = content.split("\n");
        const updatedSalaries = {};
        rows.forEach((row) => {
          const [year, salary] = row.split(",");
          if (year && salary) {
            updatedSalaries[year.trim()] = parseFloat(salary.trim());
          }
        });
        setSalaries(updatedSalaries);
      };
      reader.readAsText(file);
    } else if (file.type === "text/plain") {
      // Handle TXT file
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const rows = content.split("\n");
        const updatedSalaries = {};
        rows.forEach((row) => {
          const [year, salary] = row.split(",");
          if (year && salary) {
            updatedSalaries[year.trim()] = parseFloat(salary.trim());
          }
        });
        setSalaries(updatedSalaries);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a CSV or TXT file.");
      return;
    }
  };

  return (
    <div className="bg-white  border-2 rounded-md">
      <div className="mx-8 py-4 rounded-md  bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Тэтгэвэр тогтоох
        </h2>
        <div>
          <label htmlFor="totalMonthsInput" className="block text-sm">
            Нийгмийн даатгал төлсөн нийт сарын тоо :
          </label>
          <input
            id="totalMonthsInput"
            type="number"
            value={totalMonthsOfSocialSecurity}
            onChange={(e) =>
              setTotalMonthsOfSocialSecurity(parseInt(e.target.value))
            }
            className="border border-gray-400 rounded-lg py-2 px-16 block w-98 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="FileSelector"
            className="py-2 px-4 m border rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300"
          >
            Choose File (*csv, txt)
          </label>
          <input
            type="file"
            accept=".csv, .txt"
            id="FileSelector"
            className="hidden"
            onChange={(event) => handleFileUpload(event)}
          />
        </div>

        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className=" text-center py-2">Он</th>
              <th className="text-center  py-4 px-6">Жилийн дундаж цалин</th>
              <th className="text-center  py-2 px-2 ">
                Сайн дурын нийгмийн даатгалын шимтгэл
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(salaries).map(([year, salary]) => (
              <tr key={year}>
                <div className="border border-gray-500 rounded-full px-4 py-2 text-center">
                  <td>{year}</td>
                </div>

                <td className=" px-4">
                  <input
                    type="number"
                    value={salary}
                    onChange={(e) =>
                      handleSalaryChange(year, parseFloat(e.target.value))
                    }
                    className="border border-gray-500 rounded-full py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                  />
                </td>
                <div className="border border-gray-500 rounded-full px-4 py-2 mr-6">
                  {socialSecurityContributions[year]}
                </div>
              </tr>
            ))}
          </tbody>
          <button
            onClick={calculate}
            className="bg-gray-300 hover:bg-white border-gray-500 text-black font-bold py-2 px-4 rounded mt-4"
          >
            Тооцоолох  
          </button>
        </table>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-left">
            Дундаж цалин түүнтэй адилтгах орлого: {averageSalary.toFixed(2)}
          </h3>
          <h3 className="text-xl font-semibold text-lett">
            Тэтгэвэрийн хэмжээ: {pension}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SalaryInfo;
