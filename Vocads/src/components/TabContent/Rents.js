import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Button, Image, Dimensions, TouchableOpacity} from 'react-native';
import { TabView, SceneMap , TabBar } from 'react-native-tab-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMicrophoneAlt, faPlug, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Icon, withBadge, Badge } from 'react-native-elements';


const SecondRoute = () => (
  <View style={[styles.scene, styles.second]}>
  </View>
);


const BadgedIcon = withBadge(1)(Icon)

export default class Rents extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        index: 0,
        read:0,
        routes: [
          { key: 'upcoming', title: 'Upcoming' },
          { key: 'past', title: `Past` },
        ],
      };
    }
    _renderBadge = ({route}) => {
        if (route.title === 'Past') {
            return (
             <View style={{marginRight:'60%',marginTop:10}}>
                {this.state.index === 0  && (
                <BadgedIcon/>)}
            </View>
            );
        }
        return null;
    };
    /*renderLabel=({ route, focused, color }) => (
        <Text style={{ color, margin: 8 }}>
          {route.title}
        </Text>
      )*/
    renderTabBar = props => <TabBar {...props} 
      indicatorStyle={{ backgroundColor: 'white' }}
      renderBadge={this._renderBadge}
      //renderLabel={this.renderLabel}
      style={{ backgroundColor: '#f1c40f', marginLeft: 5, marginRight: 5 }}/>;
    render() {
        var FirstRoute;
        FirstRoute = () => (
            <View style={styles.first}>
              <View style={styles.scene}>
                  <View>
                      <Image source={require('../../img/clio4.png')} style={styles.ImgClio} />
                  </View>
                  <View>
                      <View style={{flexDirection:'row'}}>
                          <Text style={{fontWeight:'bold',textAlign: 'center', marginTop:20, marginLeft:10, color:'black'}}>Renault CLIO DEVKIT</Text>
                          <FontAwesomeIcon icon={faPlug} size="16" style={{textAlign: 'right', marginTop:20, marginLeft:70,}}/><Text style={{textAlign: 'right', marginTop:20, color:'black'}}> 46%</Text>
                      </View>
                      <Text style={{textAlign: 'left', color:'black',marginLeft:30}}>End: February 15,2019 at 10:30 AM</Text>
                      <View>
                          <TouchableOpacity style={{flexDirection:'row'}}>
                              <Text  style={{textAlign: 'right', marginLeft:160,color:'black'}}>More Details </Text><FontAwesomeIcon icon={faChevronRight} size="10" style={{color:'#f1c40f', textAlign: 'right',marginTop:5}}/>
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>
              <View>
                  <TouchableOpacity style={{backgroundColor:'#f1c40f',alignItems:'center',
                   padding:10,borderTopLeftRadius:0,borderTopRightRadius:0, 
                   borderBottomLeftRadius:6, borderBottomRightRadius:6 }}
                   onPress={() => this.props.navigation.navigate('Voice')}>
                      <FontAwesomeIcon icon={faMicrophoneAlt} size={32} color="white" />
                  </TouchableOpacity>
              </View>
            </View>
        );
        return (
            <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              upcoming: FirstRoute,
              past: SecondRoute,
            })}
            renderTabBar={this.renderTabBar}
            style={{backgroundColor: '#ecf0f1',marginTop:10}}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
          >
          </TabView>
        );
    }
}
const styles = StyleSheet.create({
    first:{
        backgroundColor: '#FFF',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        marginLeft:6,
        marginRight:6,
        marginTop:8,
    },
    ImgClio: {
        width:120,
        height:120,
        resizeMode:'contain',
        marginLeft:10
    },
    second:{
        backgroundColor: '#ecf0f1'
    },
    scene: {
        flexDirection:'row',
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
    }
});