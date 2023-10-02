import React from 'react';
import { NavLink } from "react-router-dom";
import Logements from "../logements.json";

const CardList = () => {  
    const logementsData = Logements;
    
    return (
        <div className="cardList">
            {logementsData.map((logement, index) => (
              <NavLink to={`${logement.id}`} className="card" key={index}>
                <img src={logement.cover} alt="Pièce d'un logement" />
                <p>{logement.title}</p>
                <div className="overlay"></div>
              </NavLink>
            ))}
        </div>
    );
};

export default CardList;