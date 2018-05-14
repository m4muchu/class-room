import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
import SettingScreen from './SettingScreen';

class Nav extends React.Component {
  render() {
    return (
        <MyApp />
    );
  }
}


const MyApp = DrawerNavigator({

   Home: {
        screen: TabNavigator
    },

    'Department and Semester': {
        screen: SettingScreen
    }

});

export default Nav;