import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import Header from '../header';
import MainPage from '../pages/main-page';
import PokemonDetailsPage from '../pages/pokemon-details-page';
import FavoritesPage from '../pages/favoirtes-page';


import './app.css';


const App = () => (
  <LastLocationProvider>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact />

        <Route path="/pokemon-details-page" component={PokemonDetailsPage} />

        <Route path="/favorites-page" component={FavoritesPage} />
      </Switch>
    </Fragment>
  </LastLocationProvider>
);

export default App;
