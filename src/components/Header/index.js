import './style.css';

import UserImage from '../../assets/poketrainer.jpg';

function Header() {
    return (
        <div id="header">
            <p className="maintext">Pokedex</p>
            <div className="log">
               <img alt="user" src={UserImage}/>
            </div>
        </div>
    );
}

export default Header;