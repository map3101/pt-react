import './style.css';

function Header() {
    return (
        <div id="header">
            <p className="maintext">Pokedex</p>
            <div className="buttons">
                <button className="login">Login</button>
                <button className="register">Register</button>
            </div>
        </div>
    );
}

export default Header;