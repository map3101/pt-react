import './style.css';
import backicon from '../../assets/go-back-icon.svg';

import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
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

    const [user, setUser] = useState({});

    const [userList, setUserList] = useState([]);

    const [username, setUserName] = useState("");

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user")

        if (loggedInUser){
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
            setUserList(foundUser.pokemons);
            setUserName(foundUser.user.username);
        }

        axios.get(`https://pokedex20201.herokuapp.com/pokemons/${name}`)
        .then((response) => response.data)
        .then((data) => setPokemon(data))
    }, [name]);

    const favoritar =  async () => {
        await axios.post(`https://pokedex20201.herokuapp.com/users/${username}/starred/${name}`)
        user.pokemons.push(pokemon)
        localStorage.setItem("user", JSON.stringify(user));

        window.location.reload();
    }

    const desfavoritar = async () => {
        await axios.delete(`https://pokedex20201.herokuapp.com/users/${username}/starred/${name}`)
        
        var index;
        for (var i = 0; i < user.pokemons.length; i++){
            if (user.pokemons[i].name === pokemon.name){
                index = i;
                break;
            }
        }
        
        user.pokemons.splice(index, 1);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
    }

    function search(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
                return true;
            }
        }
    }

    var favoritado = search(name, userList); 

    let history = useHistory();

    return(
        <div>
            <div className="Header">
                <Header/>
            </div>
            <img alt="Go Back" src={backicon} className="goback" onClick={() => history.goBack()}/>
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
                        {user.user &&
                            <>
                            {favoritado === true
                                ? <button onClick={desfavoritar} className="desfav">Desfavoritar</button>
                                : <button onClick={favoritar} className="fav">Favoritar</button>
                            }
                            </>
                        }          
                    </div>
                }
            </div>
        </div>
    )
}

export default Pokepage