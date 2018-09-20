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
import ProjectScreen from 'screen/project/components/ProjectScreen';
import FavoriteScreen from 'screen/favorite/components/FavoriteScreen';

const RootStack = createBottomTabNavigator(
  {
    Project: ProjectScreen,
    Favorite: FavoriteScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Project') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Favorite') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#29B6F6',
      inactiveTintColor: 'gray',
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
