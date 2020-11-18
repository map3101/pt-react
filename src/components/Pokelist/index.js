import './style.css'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pokelist({ page }) {
    
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        axios.get(`https://pokedex20201.herokuapp.com/pokemons?page=${ page }`)
        .then((response) => response.data)
        .then((data) => setPokemons(data.data))
    }, [page]);

    console.log(pokemons);

    return(
        <div className="pokemons">
            <input placeholder="Buscar pokemon" />
            <ul>
                {pokemons.map((pokemon) => (
                    <li className="pokemon" key={pokemon.id}>
                        <img alt="pokemon" src={pokemon.image_url} />
                        <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
                    </li>
                ))
                }
            </ul>
        </div>
    );
}