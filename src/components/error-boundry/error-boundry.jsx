import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? <ErrorIndicator /> : children;
  }
}
