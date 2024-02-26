import React from 'react';
import { TariffsList } from './constants/TariffsList.js';
import CardStructure from './CardStructure.jsx';
import './cardContainer.css'



function CardContainer() {
  return (
    <div className='cardContainer'>
        {TariffsList.map((tariff , index)=>
            (
                    <CardStructure props = {tariff} key={index}/>
            )
        )
        }
    </div>
  );
}

export default CardContainer;