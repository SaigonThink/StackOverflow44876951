
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import configureStore from './configureStore';

export default class Root extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <AppNavigator />
      </Provider>
    );
  }
}
