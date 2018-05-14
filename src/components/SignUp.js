import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import SignUpLogo from './SignUpLogo';
import SignUpForum from './SignUpForum';
import { createAccount, signUpChanged, profileInsert, profileName } from '../actions';

class SignUp extends React.Component {

    onButtonPress() {
        const { emailS, passwordS, username } = this.props;
        this.props.createAccount(emailS, passwordS, username);
    }

    renderError() {
        if (this.props.error) {
          return (  
            <View style={styles.errorMessageStyle}>
                <Text style={styles.errorMessage}>{this.props.error}</Text>
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
                <View>
                    <StatusBar hidden />
                </View>

                <SignUpLogo />

                <SignUpForum />

                <View>
                    {this.renderError()}
                </View>
              
                <View>
                    {this.renderButton()}
                </View> 

            </View>
    

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#37474f',
        justifyContent: 'center',
        alignItems: 'center'
        
    
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
        paddingVertical: 12,

    },
    errorMessageStyle: {
        alignSelf: 'center'
    },
    errorMessage: {
        fontSize: 20,
        color: 'red',
    }
});

const mapStateToProps = (state) => {
    console.log(state.auth.emailS);
    return {
        emailS: state.auth.emailS,
        passwordS: state.auth.passwordS,
        error: state.auth.error,
        loading: state.auth.loading,
        username: state.auth.username 
           
    };
   
};

export default connect(mapStateToProps, { createAccount })(SignUp);