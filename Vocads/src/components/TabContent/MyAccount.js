import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, StatusBar} from 'react-native';
export default class MyAccount extends React.Component {
    render() {

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="#f1c40f"
                                barStyle="light-content"/>
                   <Text style={styles.title}>My Account</Text>
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
    ImgBack: {
        width: 300,
        height: 300
    },
    title: {
        color: '#444',
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