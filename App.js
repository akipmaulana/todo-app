/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import RNSplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import store from './app/AppStore'
import ProjectScreen from './app/screen/project/ProjectScreen';
import {logRequests} from 'react-native-requests-logger';
import StackNavigation from './app/navigation/StackNavigation'

export default class App extends Component {

  constructor() {
    super();
    logRequests()
  }
  
  componentDidMount() {
    RNSplashScreen.hide()
  }

  render() {
    return (
        <Provider store={store}>
            <StackNavigation/>
        </Provider>
    );
    
  }
}
