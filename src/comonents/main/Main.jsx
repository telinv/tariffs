import React from 'react';
import styles from './Main.module.css';

function Main({price}) {
  return (
    <main className={styles.main}>руб {price} /мес</main>
  )
}

export default Main