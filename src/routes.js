import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Pokepage from './pages/Pokepage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/"/>
            <Route exact path="/:page" component={Main}/>
            <Route path="/pokemons/:name" component={Pokepage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes