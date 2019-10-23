import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, StatusBar, Image, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';

export default class VoiceInterface extends React.Component {
    render() {

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="#f1c40f"
                                barStyle="light-content"/>
                    {/*Replace by the real image <Image source={{uri :''}} style={styles.ImgBack}/>*/}
                    <TouchableOpacity style={styles.buttonContainer}>
                        <FontAwesomeIcon icon={faMicrophoneAlt} size={128} style={styles.iconContainer}/>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    iconContainer:{
        color:'#FFF'
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
        backgroundColor: '#ffda00',
        padding:15,
        marginBottom:5,
        borderRadius:200
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