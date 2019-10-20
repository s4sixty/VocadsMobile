
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation';
import React from 'react';
import { Platform } from 'react-native';
import {
    Easing,
    Animated
} from 'react-native';
import Loading from '../components/Loading'

// Configuration of transition left-right/right-left
const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(8)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps
            const thisSceneIndex = scene.index
            const width = layout.initWidth
            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })

            return { transform: [ { translateX } ] }
        },
    }
}

const SplashScreen = createStackNavigator({
    Splash: Loading
},{
    transitionConfig
});

export default createAppContainer(SplashScreen);