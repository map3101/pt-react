import { Link } from 'react-router-dom';
import './style.css';

import React, { useRef, useState } from 'react';
import axios from 'axios';



const AuthForm = props => {

    const [user, setUser] = useState(props.user);

    const form = useRef(null);

    const submit = e => {
        e.preventDefault()
        const data = new FormData(form.current);
        console.log(data.get("username"));
        axios.post('https://pokedex20201.herokuapp.com/users', {
            username: data.get("username")
        })
      }

    return(
        <> 
            <div className="formcard">
                <p className="title">POKEDEX</p>
                <div className="input">
                    <form ref={form} onSubmit={submit}>
                        <p>Cadastre-se ou faça login</p>
                        <input name="username" type="text" placeholder="Insira um nome de usuário"/>
                    </form>
                </div>
                <Link style={{color: "black"}} to="/1">Entre como convidado</Link>
            </div>
        </>
    )
}

export default AuthForm;