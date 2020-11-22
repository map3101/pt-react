import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import '../Pokelist/style.css';

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

function Favorites(){

    const [username, setUserName] = useState("");
    const [user, setUser] = useState();
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user")

        if (loggedInUser){
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
            setUserList(foundUser.pokemons);
            setUserName(foundUser.user.username);
        }
    }, [])

    return(
        <>
        {user
            ?<>
                <Header/>
                <div className="pokemons">
                <p id="favtext">Pokemons Favoritados de {username}</p>
                <ul>
                    {userList.map((pokemon) => (
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
            </>
            : <Link to="/">Você precisa estar logado para ver seus pokemons favoritos</Link>
        }
        </>
    )
}

export default Favorites