import './style.css'

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const types = {
    bug: "#7ED578",
    electric: "#FFF34B",
    fairy: "#FF7EE5",
    fighting: "#F17373",
    fire: "#FFB433",
    flying: "#D7F1E9",
    ghost: "#E2E2E2",
    grass: "#5eff53",
    ground: "#AA8546",
    ice: "#AEE3FB",
    normal: "#D7DBA8",
    poison: "#CE52F9",
    psychic: "#FFC157",
    rock: "#757575",
    steel: "#A1A1A1",
    water: "#7192FF",
    dragon: "#43372D",
    dark: "#000000"
}

// Pegar o(s) tipo(s) do pokemon e retornar um gradiente com a cor
function getColor(type) {
    var pos = type.search(";"); 
    if (pos === -1) {
        return "linear-gradient(" + types[type] + "," + types[type] + "aa)"
    }
    else{
        var type1 = type.slice(0,pos);
        var type2 = type.slice(pos+1);
        return "linear-gradient(to right," + types[type1] + " 50%," + types[type2] + " 50.001%)"
    }
}

export default function Pokelist({ page }) {
    
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        axios.get(`https://pokedex20201.herokuapp.com/pokemons?page=${ page }`)
        .then((response) => response.data)
        .then((data) => setPokemons(data.data));
    }, [page]);

    console.log(pokemons);

    return(
        <div className="pokemons">
            <input placeholder="Buscar Pokémon" />
            <ul>
                {pokemons.map((pokemon) => (
                    <Link to={`/pokemons/${pokemon.name}`} key={pokemon.id}>
                        <li style={{background: getColor(pokemon.kind) }} className="pokemon">
                            <img alt="pokemon" src={pokemon.image_url} />
                            <p className="nome">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
                        </li>
                    </Link>
                ))
                }
            </ul>
        </div>
    );
}