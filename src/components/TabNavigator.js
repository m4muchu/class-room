import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Iconicons from 'react-native-vector-icons/Ionicons';
import Books from './Books';
import Me from './Me';
import Uploads from './Uploads';


        export default TabNavigator(

            {
              Books: { screen: Books },
              Upload: { screen: Uploads },
              Me: { screen: Me },

            },
            {
              navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => {
                  const { routeName } = navigation.state;
                  let iconName;
                  if (routeName === 'Books') {
                    iconName = `ios-book${focused ? '' : '-outline'}`;
                  } else if (routeName === 'Upload') {
                    iconName = `ios-cloud-upload${focused ? '' : '-outline'}`;
                  } else if (routeName === 'Me') {
                    iconName = `ios-contact${focused ? '' : '-outline'}`;
                  }
                  // You can return any component that you like here! We usually use an
                  // icon component from react-native-vector-icons
                  return <Iconicons name={iconName} size={25} color={tintColor} />;
                },
              }),
              tabBarOptions: {
                activeTintColor: '#226eab',
                inactiveTintColor: 'gray',
                style: {
                  backgroundColor: '#000000'
                },
              },  
              tabBarComponent: TabBarBottom,
              tabBarPosition: 'bottom',
              animationEnabled: false,
              swipeEnabled: false,
            }
          );