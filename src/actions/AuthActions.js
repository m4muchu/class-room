import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, 
        LOGIN_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, SIGN_UP_CHANGED } from './type';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text

 };
};

export const passwordChange = (text) => {
        return {
            type: PASSWORD_CHANGED,
            payload: text
        };
};

export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    };
};

export const createAccount = (emailS, passwordS, username) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().createUserWithEmailAndPassword(emailS, passwordS)
        .then(user => loginSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));

        const { currentUser } = firebase.auth();

        firebase.database().ref(`/users/${currentUser.uid}/profile`)
        .set(username);
    
    
    };
};

const loginSuccess = (dispatch, user) => {
    console.log('login success');
    dispatch({
            type: LOGIN_SUCCESS,
            payload: user
    });
    Actions.nav();
  
};

const loginUserFail = (dispatch) => {
    console.log('login failed');
    dispatch({
        type: LOGIN_USER_FAIL
    });    
};

export const signUpChanged = ({ prop, value }) => {
    return {
        type: SIGN_UP_CHANGED,
        payload: { prop, value }
    };
};