import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Pokepage from './pages/Pokepage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/pokemons/:id" component={Pokepage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes