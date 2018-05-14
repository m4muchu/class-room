import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, 
        TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { emailChanged, passwordChange, loginUser } from '../actions';

class Form extends React.Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChange(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        console.log(email, password);
        this.props.loginUser(email, password);
    }

    renderError() {
        if (this.props.error) {
            return (
                <View>
                    <Text style={{ color: 'red', fontSize: 16 }}>{this.props.error}</Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <View>
                    <ActivityIndicator size="small" />
                </View>  
            );
        }   

            return (
                <TouchableOpacity
                        style={styles.button}
                        onPress={this.onButtonPress.bind(this)}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            );

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputStyle} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                />

               <TextInput 
                    style={styles.inputStyle} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry 
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}

               />

               <View>
                    {this.renderError()}
                </View>
              
                <View>
                    {this.renderButton()}
                </View> 
                   

            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#37474f',
      alignItems: 'center',
      justifyContent: 'center',

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
        marginVertical: 14,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#102027',
        borderRadius: 200,
        marginVertical: 12,
        width: 300,
        paddingVertical: 12

    }
  });

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };

};

export default connect(mapStateToProps, { emailChanged, passwordChange, loginUser })(Form);