import './style.css';

import Header from '../../components/Header';
import Pokelist from '../../components/Pokelist';

function Main (){
    return (
        <div>
            <div className = "Header">
                <Header/>
            </div>
            <div className="Pokelist">
                <Pokelist page={1}/>
            </div>
        </div>
    );
}

export default Main