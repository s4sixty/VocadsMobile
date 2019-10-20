import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from 'react-navigation';
import React from 'react';
import {
    Easing,
    Animated,
    View, 
    Text
} from 'react-native';
import Booking from'../components/TabContent/Booking'
import Help from'../components/TabContent/Help'
import MyAccount from'../components/TabContent/MyAccount'
import Rents from'../components/TabContent/Rents'
import VoiceInterface from'../components/TabContent/VoiceInterface'
import { faQuestion, faKey, faUser, faBars, faSearch } from'@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

class LogoHeader extends React.Component {
    render() {
        return (
            <View style = {{ flex:1, alignItems:'center' }}>
                <Text style={{marginLeft:-40, fontWeight:"bold",fontSize:18, color:'black'}}>Renault MOBILITY</Text>
            </View>
        );
    }
}
const customTabs = ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Reserver') {
        return renderNav(routeName, 'Reserver', tintColor, focused);
      } else if (routeName === 'Mes Locations') {
        return renderNav(routeName, 'Mes Locations', tintColor, focused);
      } else if (routeName === 'Aide') {
        return renderNav(routeName, 'Aide', tintColor, focused);
      } else if (routeName === 'Mon Compte') {
        return renderNav(routeName, 'Mon Compte', tintColor, focused);
      } else if (routeName === 'VoiceInterface') {
        return renderNav(routeName, 'VoiceInterface', tintColor, focused);
      }
    }
  });
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

const RentsStackNavigator = createStackNavigator({
    Rents: Rents,
    Voice: VoiceInterface
},{
    transitionConfig,
    defaultNavigationOptions: (props) => {
        const { navigation } = props;
        return ({
    gesturesEnabled: true,
    transitionStyle: 'inverted',
    headerLeft: <FontAwesomeIcon icon={faBars}/>,
    headerTitle: <LogoHeader/>,
    headerStyle: {
        backgroundColor: '#f1c40f',
    },
    headerTintColor: '#222'
    })
}
});
const BookingStackNavigator = createStackNavigator({
    Booking: Booking
},{
    transitionConfig,
    defaultNavigationOptions: (props) => {
        const { navigation } = props;
        return ({
    gesturesEnabled: true,
    transitionStyle: 'inverted',
    headerLeft: <FontAwesomeIcon icon={faBars}/>,
    headerTitle: <LogoHeader/>,
    headerStyle: {
        backgroundColor: '#f1c40f',
    },
    headerTintColor: '#222'
    })
    }
})
const HelpStackNavigator = createStackNavigator({
    Help: Help
},{
    transitionConfig,
    defaultNavigationOptions: (props) => {
        const { navigation } = props;
        return ({
    gesturesEnabled: true,
    transitionStyle: 'inverted',
    headerLeft: <FontAwesomeIcon icon={faBars}/>,
    headerTitle: <LogoHeader/>,
    headerStyle: {
        backgroundColor: '#f1c40f',
    },
    headerTintColor: '#222'
    })
    }
})
const AccountStackNavigator = createStackNavigator({
    Acoount: MyAccount
},{
    transitionConfig,
    defaultNavigationOptions: (props) => {
        const { navigation } = props;
        return ({
    gesturesEnabled: true,
    transitionStyle: 'inverted',
    headerLeft: <FontAwesomeIcon icon={faBars}/>,
    headerTitle: <LogoHeader/>,
    headerStyle: {
        backgroundColor: '#f1c40f',
    },
    headerTintColor: '#222'
    })
    }
})
const UserTabNavigator = createBottomTabNavigator({
    Reserver: {
        screen : BookingStackNavigator,
        navigationOptions:{
            tabBarIcon: <FontAwesomeIcon icon={faSearch} size={20}/>
        }
    },
    'Mes Locations': { 
        screen : RentsStackNavigator,
        navigationOptions:{
            tabBarIcon: <FontAwesomeIcon icon={faKey} size={20}/>
        }
    
    },
    Aide: {
        screen : HelpStackNavigator,
        navigationOptions:{
            tabBarIcon: <FontAwesomeIcon icon={faQuestion} size={20}/>
        }
    },
    'Mon Compte': {
        screen : AccountStackNavigator,
        navigationOptions:{
            tabBarIcon: <FontAwesomeIcon icon={faUser} size={20}/>
        }
    }
})

export default createAppContainer(UserTabNavigator);