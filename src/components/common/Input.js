import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

    
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>{label}</Text>
                <TextInput 
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.textInput}

                />
            </View>
        );
    
};


const styles = StyleSheet.create({

    textInput: {
        
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        flex: 2,
        fontSize: 18,
        lineHeight: 23      
    },
    labelStyle: {       
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'


    }
});
export { Input }; 