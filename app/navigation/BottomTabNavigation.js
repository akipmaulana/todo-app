import React from 'react';
import { ScreenName } from "app/AppConstant";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import { Color } from 'config';
import ProjectScreen from 'screen/project/ProjectScreen';
import FavoriteScreen from 'screen/favorite/FavoriteScreen';
import CompleteScreen from 'screen/complete/CompleteScreen';
import HistoryScreen from 'screen/history/HistoryScreen';

const BottomTabNavigation = createBottomTabNavigator(
    {
        [ScreenName.PROJECT]: {
          screen: ProjectScreen
        },
        [ScreenName.HISTORY]: {
            screen: HistoryScreen
        },
        [ScreenName.FAVORITE]: {
            screen: FavoriteScreen
        },
        [ScreenName.COMPLETE]: {
            screen: CompleteScreen
        },
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          switch (routeName) {
            case ScreenName.PROJECT:
              iconName = `ios-albums`;  
              break;
            case ScreenName.HISTORY:
              iconName = 'ios-clock'; 
              break;
            case ScreenName.FAVORITE:
              iconName = `ios-heart`;
              break;
            case ScreenName.COMPLETE:
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

export default BottomTabNavigation