import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class SignUpLogo extends React.Component {
    render() {
        return (
            
        //  <View style={styles.container}>
            
            <View style={styles.symbolHedder}>
                <View>
                    <Image
                        style={{ width: 60, height: 80 }}
                        source={require('../Logo/logo.png')}
                    />
            
                </View>
                
            </View>
        //  {/* </View> */}
        );
    }
}

const styles = StyleSheet.create({
    

    symbolHedder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
        
    },
    textSignIn: {
        fontSize: 18,
        color: '#ffffff',
        justifyContent: 'center',
        fontWeight: '500',
    }
});

export default SignUpLogo;