import React from "react";
import {useState, useEffect} from 'react';
import Pokimon from "../../Functions/Obetner-info-api";
import CardPokemon from "../Card/Card";


function PokimonCard(){
    const[Pokemon, setPokemon] = useState([]);

    useEffect( () => {
        Pokimon().then(setPokemon);
    },[]);

    const listItem = Pokemon.map((elements) =>(
        <CardPokemon key={elements.id}  
                    id={elements.id}
                    name={elements.name}
                    img={elements.sprites}
                    exp={elements.base_experience}
                    stats={elements.stats}
                    types={elements.types}
                    />
    ))
    return(
        <div>
           {listItem}
        </div>
    )
    
}

export default PokimonCard;