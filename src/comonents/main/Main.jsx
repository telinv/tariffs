import React from 'react';
import styles from './Main.module.css';

function Main({price}) {
  return (
    <div className={styles.main}>
      <p>руб </p>
      { price}
      <p>/мес</p>
      </div>
  )
}

export default Main