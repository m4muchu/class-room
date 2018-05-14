import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

class Logo extends React.Component {
    render() {
        return (
         <View style={styles.container}>
            <Image
                style={{ width: 90, height: 110 }}
                source={require('../Logo/logo.png')}
            />
            <Text style={styles.logoText}>Welcome To Clasroom</Text>
         </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent:'flex-end',
    },
    logoText: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)',
        marginVertical: 15
    }
  });

export default Logo;