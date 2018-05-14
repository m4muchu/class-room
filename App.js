import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import reducer from './src/reducers';
import Routers from './src/Routers';


export default class App extends React.Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAWW19qoTev3JoyG8SPGy1T2bEWLhyFnLs',
      authDomain: 'class-room-91bd5.firebaseapp.com',
      databaseURL: 'https://class-room-91bd5.firebaseio.com',
      projectId: 'class-room-91bd5',
      storageBucket: 'class-room-91bd5.appspot.com',
      messagingSenderId: '64023096651'
    };
    Firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Routers />
        </Provider>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});