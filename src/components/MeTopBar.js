import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { StatusBar, StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { Container, Header, Left, Right, Body, Footer, FooterTab, Content } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'; 


class MeTopBar extends React.Component {
 

    render() {
        return (
            <Container>
                <StatusBar hidden />
                <Header style={styles.navBar}>
                <Left> 
                    <Image style={styles.circularImage} source={require('../images/muchu.jpg')} />
                </Left>
                <Body>
                    <Text style={styles.username}>{this.props.name}</Text>
                </Body>
                <Right>
                    <Icon name="settings" size={30} color="white" />
                </Right>

                </Header>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    navBar: {
        height: 65,
        backgroundColor: '#000000',
        elevation: 5
    },
    circularImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: '#E5E5E5',
        borderWidth: 0.5
    },
    bottamBar: {
        backgroundColor: '#000000',
        height: 57,
        borderTopWidth: 0.2,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'


    },
    body: {
        flex: 1
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btmTitle: {
        color: 'white',
        fontSize: 11
    },
    username: {
        color: 'white',
        fontSize: 18
    },
    topBar: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'space-around'
    },
    topBarTitle: {
        fontSize: 15,
        color: 'white'
    }
});


export default MeTopBar;