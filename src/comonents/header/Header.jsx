import React from 'react';
import styles from './header.module.css';
export default function Header({name}){
    return(

          <header className={styles.header}>{name}</header>  
    )
}