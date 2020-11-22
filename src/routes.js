import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Pokepage from './pages/Pokepage';
import Auth from './pages/Auth';
import Favorites from './components/Favorites';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Auth}/>
            <Route exact path="/:page" component={Main}/>
            <Route path="/pokemons/:name" component={Pokepage}/>
            <Route path="/user/Profile" component={Favorites}/>
        </Switch>
    </BrowserRouter>
);

export default Routes