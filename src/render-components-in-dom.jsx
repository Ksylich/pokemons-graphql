import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import client from './graphql/client';


export default class RenderInDom {
  static RenderComponents() {
    return (
      <ApolloProvider client={client}>
        <ErrorBoundry>
          <Router>
            <App />
          </Router>
        </ErrorBoundry>
      </ApolloProvider>
    );
  }
}
