import React from 'react';
import { View, StatusBar, StyleSheet, Text, 
        KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Logo from './Logo';
import Form from './Form';
import { Actions } from 'react-native-router-flux';

class Login extends React.Component {

    // renderSignUp() {
    //     return (
            
    //     <TouchableWithoutFeedback
    //     onPress={Actions.signup()}
    //     > 
    //     <View>
    // <Text style={styles.span}>Signup</Text>
    // </View>
    // </TouchableWithoutFeedback>
            
    //     );
    // }

    signup() {
        Actions.signup();
    }

    render() {
        return (
            <KeyboardAvoidingView
                 style={styles.container}
                 behavior="padding"

            >
                <StatusBar
                    backgroundColor="#102027"
                    barStyle="light-content"
                    hidden
                />
                <Logo />
                <Form />
                <View style={styles.signUpTextCont}>
                    <Text style={styles.signUpText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}>
                    <View>
                     <Text style={styles.span}>Signup</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#37474f',
      alignItems: 'center',
      justifyContent: 'center',

    },
    signUpTextCont: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 16
    },

   signUpText: {
    color: 'rgba(255,255,255,0.6)',
    justifyContent: 'center',

   },

   span: {
    fontSize: 16,
    justifyContent: 'center',
    color: '#ffffff',
    fontWeight: '500',
    paddingLeft: 5
   }
  });


  export default Login;