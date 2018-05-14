import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Uploads from './Uploads';
import MeTopBar from './MeTopBar';

class YourUploads extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <MeTopBar />
      </View>
    );
  }
}

export default TabNavigator({
 'Your Uploads': { screen: YourUploads },
  Profile: { screen: ProfileScreen },  
},
{
tabBarOptions: {
  activeTintColor: '#226eab',
  indicatorStyle: '#226eab',
  labelStyle: {
    fontSize: 15,
  },
  style: {
    backgroundColor: 'black',
  },
}

}
);