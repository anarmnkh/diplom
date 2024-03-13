// components/InitialWindow.js
import React from 'react';
import styles from '../styles/components/InitialWindow.module.css';

const InitialWindow = ({ onClick, showOptions }) => {
  return (
    <div className={`${styles.container} ${showOptions && styles.visible}`}>
      <h1>Тэтгэвэр төлөвлөлт</h1>
      <button className={styles.btn} onClick={onClick}>Өндөр насны тэтгэвэр</button>
    </div>
  );
};

export default InitialWindow;
