import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
    DrawerActions,
    BottomTabBar,
    DrawerNavigatorConfig
} from 'react-navigation';
import React from 'react';
import {
    Easing,
    Animated,
    View, 
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import Booking from'../components/TabContent/Booking'
import Help from'../components/TabContent/Help'
import MyAccount from'../components/TabContent/MyAccount'
import Rents from'../components/TabContent/Rents'
import VoiceInterface from'../components/TabContent/VoiceInterface'
import { faQuestion, faKey, faUser, faBars, faSearch } from'@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Icon, withBadge, Badge, } from'react-native-elements';
class LogoHeader extends React.Component {
    render() {
        return (
            <View style = {{ flex:1, alignItems:'center' }}>
                <Text style={{marginLeft:-40, fontWeight:"bold",fontSize:18, color:'black'}}>Renault MOBILITY</Text>
            </View>
        );
    }
}
class ButtonDrawer extends React.Component {
    
    onButtonPress = () => {
        startMainTab();
      }
      render(){
          return(
            <View style ={{ flex:1, alignItems:'flex-start'}}>
                <TouchableOpacity onPress={this.startMainTab}>
                    <FontAwesomeIcon icon={faBars} />
                </TouchableOpacity>
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
    headerLeft: <ButtonDrawer/>,
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
const TabBarComponent = props => <BottomTabBar {...props} />;

const BadgedIcon = withBadge(1)(Icon)

const UserTabNavigator = createBottomTabNavigator({
    Booking: {
        screen : BookingStackNavigator,
        navigationOptions:{
            tabBarIcon: <FontAwesomeIcon icon={faSearch} size={20}/>
        }
    },
    'My Rents': { 
        screen : RentsStackNavigator,
        navigationOptions:{
            tabBarIcon: <BadgedIcon type="ionicon" name="ios-key" />
        }
    
    },
    Help: {
        screen : HelpStackNavigator,
        navigationOptions:{
            tabBarIcon: <FontAwesomeIcon icon={faQuestion} size={20}/>
        }
    },
    'My Account': {
        screen : AccountStackNavigator,
        navigationOptions:{
            tabBarIcon: <FontAwesomeIcon icon={faUser} size={20}/>
        }
    }
},{
    tabBarOptions: {
        activeTintColor: '#f1c40f',
       /* style: {
          borderBottomColor : '#f1c40f',
          borderBottomWidth:3
        },*/
      }
})

export default createAppContainer(UserTabNavigator);