import React, { useState } from "react";

const RetirementAgeCalculator = () => {
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("male");
  const [retirementAgeYears, setRetirementAgeYears] = useState(null);
  const [retirementAgeMonths, setRetirementAgeMonths] = useState(null);

  const calculateRetirementAge = () => {
    const year = parseInt(birthYear);
    let retirementYears = null;
    let retirementMonths = null;
  
    if (gender === "male") {
      if (year < 1957) {
        retirementYears = 60;
      } else if (year >= 1957 && year < 1977) {
        retirementYears = 60 + Math.floor((year - 1957) * 0.25);
        retirementMonths = Math.floor((year - 1957) * 0.25 * 12) % 12;
      } else if (year >= 1977 ) {
        retirementYears = 65;
      }
    } else if (gender === "female") {
      if (year < 1962) {
        retirementYears = 55;
      } else if (year >= 1962 && year < 2002) {
        retirementYears = 55 + Math.floor((year - 1962) * 0.25);
        retirementMonths = Math.floor((year - 1962) * 0.25 * 12) % 12;
      } else if (year >= 2002) {
        retirementYears = 65;
      }
    }
  
    setRetirementAgeYears(retirementYears);
    setRetirementAgeMonths(retirementMonths);
  };
  
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4"> Тэтгэвэр тогтоолгох нас</h2>
      <div className="flex flex-col space-y-4">
        <label htmlFor="birthYear" className="text-lg font-semibold">
          Төрсөн он:
        </label>
        <input
          type="number"
          id="birthYear"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />
        <label htmlFor="gender" className="text-lg font-semibold">
          Хүйс:
        </label>
        <select
          id="gender"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Эрэгтэй</option>
          <option value="female">Эмэгтэй </option>
        </select>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={calculateRetirementAge}
        >
          Тооцоолох
        </button>
        {retirementAgeYears !== null && (
          <p className="text-lg font-semibold">
            Та {retirementAgeYears} нас {retirementAgeMonths || 0} сартай
            тэтгэвэрт гарна.
          </p>
        )}
      </div>
    </div>
  );
};

export default RetirementAgeCalculator;
