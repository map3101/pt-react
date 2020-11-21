import './style.css'

import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
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
    dragon: "#43372D"
}

// Pegar a quantidade de tipos e as cores
function Type(type) {
    var pos = type.search(";"); 
    if (pos === -1) {
        return [1, type, types[type]]
    }
    else{
        var type1 = type.slice(0,pos);
        var type2 = type.slice(pos+1);
        return [2, type1, types[type1],type2, types[type2]] 
    }
}

function Pokepage (){
    const [pokemon, setPokemon] = useState([]);

    const name =  useLocation().pathname.slice(10);

    useEffect(() => {
        axios.get(`https://pokedex20201.herokuapp.com/pokemons/${name}`)
        .then((response) => response.data)
        .then((data) => setPokemon(data))
    }, [name]);


    return(
        <div>
            <div className="Header">
                <Header/>
            </div>
            <div className="Pokecard">
                <div className="imagem">
                    <img alt="pokemon" src={pokemon.image_url}></img>
                </div>
                {pokemon.name &&
                    <div className="info">
                        <p id="num">#{pokemon.number}</p>
                        <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
                        <div className="type">
                            {Type(pokemon.kind)[0] === 1
                                ? <p id="onekind" style={{ backgroundColor: Type(pokemon.kind)[2] }}>{Type(pokemon.kind)[1].toUpperCase()}</p>
                                :<div className="PokeType">
                                    <p id="type" style={{ backgroundColor: Type(pokemon.kind)[2] }}>{Type(pokemon.kind)[1].toUpperCase()}</p>
                                    <p id="type"  style={{ backgroundColor: Type(pokemon.kind)[4] }} >{Type(pokemon.kind)[3].toUpperCase()}</p>
                                </div>
                            }
                        </div>
                        <p id="fisico">Height: {pokemon.height/10} m</p>
                        <p id="fisico">Weight: {pokemon.weight/10} Kg</p>              
                    </div>
                }
            </div>
        </div>
    )
}

export default Pokepage