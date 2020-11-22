import { Link, Redirect } from 'react-router-dom';
import './style.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';



const AuthForm = () => {

    const [username, setUsername] = useState("");
    const [user, setUser] = useState()

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user")

        if (loggedInUser){
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, [])

    const submit = async e => {
        e.preventDefault();
        
        try{
            await axios.post("https://pokedex20201.herokuapp.com/users/", {
            username: username
        });

        } catch(error){
            console.log(error.request)
            console.log("pegando infos")
        }

        const response = await axios.get(`https://pokedex20201.herokuapp.com/users/${username}`);
        localStorage.setItem('user', JSON.stringify(response.data));
        window.location.reload();
    }

    if(user){
        return <Redirect to="/1"/>
    }

    return(
        <> 
            <div className="formcard">
                <p className="title">POKEDEX</p>
                <div className="input">
                    <form onSubmit={submit}>
                        <p>Cadastre-se ou faça login</p>
                        <input 
                        name="username" 
                        type="text" 
                        value={username} 
                        placeholder="Insira um nome de usuário"
                        onChange={({ target }) => setUsername(target.value)}/>
                    </form>
                </div>
                <Link style={{color: "black"}} to="/1">Entre como convidado</Link>
            </div>
        </>
    )
}

export default AuthForm;