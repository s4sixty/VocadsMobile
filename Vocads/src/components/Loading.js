// Loading.js
import React from 'react'
import { View, StatusBar, StyleSheet, Image } from 'react-native'


export default class Loading extends React.Component {
    static navigationOptions = {
        header:null
    }
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            3000
          )
        )
      }
    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
    
        if (data !== null) {
          this.props.navigation.navigate('Booking');
        }
      }
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#f1c40f"
                                barStyle="light-content"/>
                <Image source={require('../img/logo.png')} style={styles.ImgBack}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f1c40f"
    },
    ImgBack: {
        width: 300,
        height: 300
    },
})