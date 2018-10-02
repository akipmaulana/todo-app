/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import RNSplashScreen from 'react-native-splash-screen';
import MainNavigation from './app/navigation/navigators/MainNavigation'
import { Provider } from 'react-redux';
import store from './app/AppStore'
import ProjectScreen from './app/screen/project/ProjectScreen';

export default class App extends Component {

  componentDidMount() {
    RNSplashScreen.hide()
  }

  render() {
    return (
        <Provider store={store}>
            <MainNavigation/>
        </Provider>
    );
    
  }
}
