import React from 'react';
import { StatusBar, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import Root from './js/Root';


export default class App extends React.Component {
  state = {
    loaded: false
  }

  componentWillMount() {
    this._loadFontsAsync();
  }

  _loadFontsAsync = async () => {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({loaded: true});
  }

  render() {
    if (!this.state.loaded) {
      return <AppLoading />
    }

    return <Root />;
  }

}
