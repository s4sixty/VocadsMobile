import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import SplashScreen from './SplashScreen';
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
      Splash: SplashScreen,
      Main: MainNavigator
    })
);
