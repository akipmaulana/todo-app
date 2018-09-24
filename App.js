/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import RNSplashScreen from 'react-native-splash-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import { Color } from 'config';
import ProjectScreen from './app/screen/project/ProjectScreen';
import FavoriteScreen from './app/screen/favorite/FavoriteScreen';
import CompleteScreen from './app/screen/complete/CompleteScreen';
import HistoryScreen from './app/screen/history/HistoryScreen';

const RootStack = createBottomTabNavigator(
  {
    Project: ProjectScreen,
    History: HistoryScreen,
    Favorite: FavoriteScreen,
    Complete: CompleteScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Project':
            iconName = `ios-albums`;  
            break;
          case 'History':
            iconName = 'ios-clock';
            break;
          case 'Favorite':
            iconName = `ios-heart`;
            break;
          case 'Complete':
            iconName = `ios-archive`;
            break;
          default:
            break;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: Color.blue,
      inactiveTintColor: Color.light_grey4,
    },
  }
);

export default class App extends Component {

  componentDidMount() {
    RNSplashScreen.hide()
  }

  render() {
    return <RootStack/>;
  }
}
