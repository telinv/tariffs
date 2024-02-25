import React from "react";
import Footer from "./footer/Footer.jsx"
import Header from "./header/Header.jsx";
import Main from "./main/Main.jsx";
import styles from './Card.module.css'



export default function CardStructure({props}){
    return(
        <div className={styles.card}>
            <Header
            name= {props.name}/>
           
            <Main
            price ={props.price}/>
          
            <Footer
            speed = {props.speed}/>
        </div>
    )
}