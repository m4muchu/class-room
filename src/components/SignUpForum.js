import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TextInput, } from 'react-native';
import { signUpChanged } from '../actions';

class SignUpForum extends React.Component {

    render() {
        return (

             <View style={styles.container}>

                <TextInput 
                    style={styles.inputStyle} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="User Name"
                    placeholderTextColor="black"
                    onChangeText={(text) => this.props.signUpChanged({ prop: 'username', value: text })}
                    value={this.props.username}
                    
                />
                
                <TextInput 
                    style={styles.inputStyle} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    onChangeText={(text) => this.props.signUpChanged({ prop: 'emailS', value: text })}
                    value={this.props.emailS}
                />
                <TextInput 
                    style={styles.inputStyle} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry
                    onChangeText={(text) => this.props.signUpChanged({ prop: 'passwordS', value: text })}
                    value={this.props.passwordS}
                />
                   <TextInput 
                    style={styles.inputStyle} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Confirm Password"
                    placeholderTextColor="black"
                    secureTextEntry
                    onChangeText={(text) => this.props.signUpChanged({ prop: 'confirm', value: text })}
                    value={this.props.confirm}
                />
        
            </View>     
        );
    }
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#37474f',
      alignItems: 'center',
      justifyContent: 'flex-start',    
    },
    inputStyle: {
        width: 300,
        lineHeight: 23,
        backgroundColor: 'rgba( 255,255,255,0.5)',
        borderRadius: 200,
        paddingRight: 5,
        paddingLeft: 15,
        paddingVertical: 10,
        fontSize: 16,
        color: 'black',
        marginVertical: 14
    },

});

const mapStateToProps = state => {
    const { emailS, passwordS, confirm } = state.auth;
    const { username } = state.prof;
    return { emailS, passwordS, confirm, username };
}

export default connect(mapStateToProps, { signUpChanged })(SignUpForum);