import React from "react";
import { ScreenName } from "app/AppConstant";
import { createStackNavigator } from "react-navigation";
import ProjectScreen from "screen/project/ProjectScreen";
import TaskScreen from "screen/task/TaskScreen";
import TaskFormScreen from "screen/task/TaskFormScreen";
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

const MainStack = createStackNavigator(
  {
    [ScreenName.PROJECT]: {
      screen: ProjectScreen
    },
    [ScreenName.TASK]: {
      screen: TaskScreen
    }
  },
  {
    headerMode: "none",
    initialRouteName: ScreenName.PROJECT,
    transitionConfig: getSlideFromRightTransition,
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    [ScreenName.TASK_FORM]: {
      screen: TaskFormScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default RootStack;
