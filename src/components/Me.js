import React from 'react';
import { StatusBar, StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { TabNavigator, NavigationContainer } from 'react-navigation';
import { Container, Header, Left, Right, Body, Footer, FooterTab, Content } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import MeNavBar from './MeNavBar';

export default class Me extends React.Component {

    render() {
        return (
                
               <MeNavBar />    
        );
    }
}

