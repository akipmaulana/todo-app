import React from 'react';
import * as ScreenNames from "../ScreenNames";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import { Color } from 'config';
import ProjectScreen from 'screen/project/ProjectScreen';
import FavoriteScreen from 'screen/favorite/FavoriteScreen';
import CompleteScreen from 'screen/complete/CompleteScreen';
import HistoryScreen from 'screen/history/HistoryScreen';

const MainNavigation = createBottomTabNavigator(
    {
        [ScreenNames.PROJECT]: {
          screen: ProjectScreen
        },
        [ScreenNames.HISTORY]: {
            screen: HistoryScreen
        },
        [ScreenNames.FAVORITE]: {
            screen: FavoriteScreen
        },
        [ScreenNames.COMPLETE]: {
            screen: CompleteScreen
        },
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          switch (routeName) {
            case ScreenNames.PROJECT:
              iconName = `ios-albums`;  
              break;
            case ScreenNames.HISTORY:
              iconName = 'ios-clock'; 
              break;
            case ScreenNames.FAVORITE:
              iconName = `ios-heart`;
              break;
            case ScreenNames.COMPLETE:
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

export default MainNavigation