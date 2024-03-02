import React, {useState} from "react";
import Footer from "./footer/Footer.jsx"
import Header from "./header/Header.jsx";
import Main from "./main/Main.jsx";
import styles from './Card.module.css';


export default function CardStructure({props}){

const [selected, setSelected] = useState(false)

const handleSelectedState = () => {

    setSelected(!selected)
} 

    return(
        <div className={styles.card} 
        {...props}
        onClick={handleSelectedState}
        style={selected ? 
            {height: "700px", width: "350px"} 
            : {height: "var(--default__height)" , width: "var(--default__width)"}}>
            <Header
            name= {props.name}/>
           
            <Main
            price ={props.price}/>
          
            <Footer
            speed = {props.speed}/>
        </div>
    )
}