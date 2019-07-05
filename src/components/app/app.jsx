import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import Header from '../header';
import MainPage from '../pages/main-page';


import './app.css';


const App = () => (
  <LastLocationProvider>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact />

        {/* <Route path="/movie-details-page" component={MovieDetailsPage} />

        <Route path="/favorites-page" component={FavoritesPage} /> */}
      </Switch>
    </Fragment>
  </LastLocationProvider>
);

export default App;
