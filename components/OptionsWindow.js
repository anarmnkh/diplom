// components/OptionsWindow.js
import React, { useState } from 'react';
import styles from '../styles/components/OptionsWindow.module.css';

const OptionsWindow = ({ onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const handleClose = () => {
    onClose();
    setSelectedOptions([]);
  };

  return (
    <div className={styles.container}>
      <h1>Options:</h1>
      <div className={styles.optionsContainer}>
        <button className={styles.optionBtn} onClick={() => handleOptionClick('Эрэгтэй')}>Эрэгтэй</button>
        <button className={styles.optionBtn} onClick={() => handleOptionClick('Эмэгтэй')}>Эмэгтэй</button>
      
      </div>
      <button className={`${styles.btn} ${styles.closeBtn}`} onClick={handleClose}>Close Options</button>
      <div>
        <h2>Selected Options:</h2>
        <ul>
          {selectedOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OptionsWindow;
