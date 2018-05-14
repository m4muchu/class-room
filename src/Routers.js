import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './components/Login';
import Me from './components/Me';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import SettingScreen from './components/SettingScreen';
import TabNavigator from './components/TabNavigator';
import MeNavBar from './components/MeNavBar';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Stack key="auth" >
                    <Scene key="login" component={Login} hideNavBar initial />
                    <Scene key="signup" component={SignUp} hideNavBar />
                </Stack>

                            <Scene key="tabnavigator" component={TabNavigator} hideNavBar />
                            <Scene key="nav" component={Nav} hideNavBar />
                            <Scene key="me" component={Me} hideNavBar />
                            <Scene key="meNavBar" component={MeNavBar} hideNavBar />   
                            <Scene key="settings" component={SettingScreen} />
        
               
            </Stack>
        </Router>
    );
};

export default RouterComponent;

