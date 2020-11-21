import './style.css';

import Header from '../../components/Header';
import Pokelist from '../../components/Pokelist';
import { useState } from 'react';

function Main (){

    const [pag, setPag] = useState(1);

    function handleClick(page){
        setPag(page);
    }


    return (
        <div>
            <div className = "Header">
                <Header/>
            </div>
            <div id="pagination">
                {pag > 1 &&
                <button onClick={() => handleClick(pag-1)}>Prev.</button>
                }
                <button onClick={() => handleClick(1)}>1</button>
                <button onClick={() => handleClick(2)}>2</button>
                <button onClick={() => handleClick(3)}>3</button>
                <button onClick={() => handleClick(4)}>4</button>
                <button onClick={() => handleClick(5)}>5</button>
                <button onClick={() => handleClick(6)}>6</button>
                ...
                <button onClick={() => handleClick(20)}>20</button>
                ...
                <button onClick={() => handleClick(25)}>25</button>
                ...
                <button onClick={() => handleClick(33)}>33</button>
                {pag < 33 &&
                <button onClick={() => handleClick(pag+1)}>Next</button>
                }
            </div>
            <div className="Pokelist">
                <Pokelist page={pag}/>
            </div>
        </div>
    );
}

export default Main