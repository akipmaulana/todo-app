import React from 'react';
import { ScreenName } from "app/AppConstant";
import { createStackNavigator } from 'react-navigation';
import ProjectScreen from 'screen/project/ProjectScreen';
import HistoryScreen from 'screen/history/HistoryScreen';


const StackNavigation = createStackNavigator(
    {
        [ScreenName.PROJECT]: {
            screen: ProjectScreen,
        },
        [ScreenName.HISTORY]: {
            screen: HistoryScreen,
        }
    }, 
    {
        headerMode: 'none',
        initialRouteName: ScreenName.PROJECT
    }
);

export default StackNavigation