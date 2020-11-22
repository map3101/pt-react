import './style.css';

import Header from '../../components/Header';
import Pokelist from '../../components/Pokelist';
import { useHistory, useLocation } from 'react-router-dom';

function Main (){

    const page = useLocation().pathname.slice(1);

    let history = useHistory();

    return (
        <>
            <div className = "Header">
                <Header/>
            </div>
            <div className="Pokelist">
                <Pokelist page={page}/>
            </div>
            <div id="pagination">
                {page > 1 &&
                <button onClick={() => history.push(`/${page-1}`)}>Prev.</button>
                }
                <button onClick={() => history.push("/1")}>1</button>
                <button onClick={() => history.push("/2")}>2</button>
                <button onClick={() => history.push("/3")}>3</button>
                <button onClick={() => history.push("/4")}>4</button>
                <button onClick={() => history.push("/5")}>5</button>
                <button onClick={() => history.push("/6")}>6</button>
                ...
                <button onClick={() => history.push("/20")}>20</button>
                ...
                <button onClick={() => history.push("/25")}>25</button>
                ...
                <button onClick={() => history.push("/33")}>33</button>
                {page < 33 &&
                <button onClick={() => history.push(`/${parseInt(page)+1}`)}>Next</button>
                }
            </div>
        </>
    );
}

export default Main