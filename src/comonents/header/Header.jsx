import React from 'react';
import styles from './header.module.css';
export default function Header({name}){
    return(
        <div className={styles.header}>
          <header>{name}</header>  
        </div>
    )
}