import {
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';
import VoiceInterface from'../components/TabContent/VoiceInterface'
const Drawer = createDrawerNavigator({
    Voice :{ screen: VoiceInterface }
});

export default createAppContainer(Drawer);