import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, StatusBar, Dimensions} from 'react-native';
import { TabView, SceneMap , TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]}/>
);

const SecondRoute = () => (
  <View style={styles.second} />
);


export default class Rents extends React.Component {
    state = {
        index: 0,
        routes: [
          { key: 'upcoming', title: 'Upcoming' },
          { key: 'past', title: 'Past' },
        ],
      };
      renderTabBar = props => <TabBar {...props} 
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#f1c40f', marginLeft: 5, marginRight: 5 }}/>;
    render() {
        return (
            <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              upcoming: FirstRoute,
              past: SecondRoute,
            })}
            renderTabBar={this.renderTabBar}
            style={styles.scene}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
          >
          </TabView>
        );
    }
}
const styles = StyleSheet.create({
    first:{
        backgroundColor: '#ff4081' 
    },
    second:{
        backgroundColor: '#673ab7'
    },
    scene: {
        flex:1,
        marginTop:10,
        marginRight:6,
        marginLeft:6
    },
    container: {
        flex: 1,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    ImgBack: {
        width: 300,
        height: 300
    },
    title: {
        color: '#FFF',
        marginTop: 5,
        width: 160,
        textAlign: 'center',
        fontSize: 18,
        opacity: 0.9
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        padding:15,
        marginBottom:5
    },
    buttonSubscribe:{
        marginTop:5,
        backgroundColor: '#c0392b',
        padding: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#ecf0f1'
    }
});