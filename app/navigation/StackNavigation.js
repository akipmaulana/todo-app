import React from 'react';
import { ScreenName } from "app/AppConstant";
import { createStackNavigator } from 'react-navigation';
import ProjectScreen from 'screen/project/ProjectScreen';
import TaskScreen from 'screen/task/TaskScreen';


const StackNavigation = createStackNavigator(
    {
        [ScreenName.PROJECT]: {
            screen: ProjectScreen,
        },
        [ScreenName.TASK]: {
            screen: TaskScreen,
        }
    }, 
    {
        headerMode: 'none',
        initialRouteName: ScreenName.PROJECT
    }
);

export default StackNavigation