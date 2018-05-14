const firebase = require('firebase');


const config = {
    apiKey: 'AIzaSyAWW19qoTev3JoyG8SPGy1T2bEWLhyFnLs',
    authDomain: 'class-room-91bd5.firebaseapp.com',
    databaseURL: 'https://class-room-91bd5.firebaseio.com',
    projectId: 'class-room-91bd5',
    storageBucket: 'class-room-91bd5.appspot.com',
    messagingSenderId: '64023096651'
  };
const firebaseapp = firebase.initializeApp(config);

export default firebaseapp;

  