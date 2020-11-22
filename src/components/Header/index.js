import './style.css';

import UserImage from '../../assets/poketrainer.jpg';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Header() {

    const [user, setUser] = useState({});

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user")

        if (loggedInUser){
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, [])

    let history = useHistory();

    const userProfile = () => {
        history.push("/user/Profile")
    }

    const handleLogoutClick = () => {
        setUser({});
        localStorage.clear();
        history.push("/")
    }

    const redirectLogin = () => {
        history.push("/")
    }

    return (
        <div id="header">
            <p className="maintext"><Link to="/1">Pokedex</Link></p>
            {user.user
               ? <div className="log">
                    <img onClick={userProfile} alt="user" src={UserImage}/>
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
                :<div className="log">
                    <img onClick={redirectLogin} alt="user" src={UserImage}/>
                </div>
            }
        </div>
    );
}

export default Header;