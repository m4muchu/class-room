 import firebase from 'firebase';
 import { FETCH_BOOKS, FILE_NAME_CHANGED } from './type';

 export const fetchBooks = () => {
        const { currentUser } = firebase.auth();
      
        return (dispatch) => {
          firebase.database().ref('books')
            .on('value', snapshot => {
                console.log(snapshot.val());
              dispatch({ type: FETCH_BOOKS, payload: snapshot.val() });
            });
        };
      };

// export const fileNameChanged = (text) => {
//         return {
//             type: FILE_NAME_CHANGED,
//             payload: { text }
//         };
//     };


// export const profileName = (text) => {
//     return {
//         type: PROFILE_NAME,
//         payload: text
//     };
// };

// export const profileInsert = (name) => {
//     const { currentUser } = firebase.auth();

//     return () => {
//         firebase.database().ref(`/users/${currentUser.uid}/profile`)
//         .set(name);
//     };


// };

// export const profileFetch = () => {
//     console.log('enter profilefetcher');
//     const { currentUser } = firebase.auth();

//     return (dispatch) => {
//         console.log('test action');
//         firebase.database().ref(`/users/${currentUser.uid}/profile`)
//         .once('value').then((snapshot) => {
//             console.log('snapshot');
//             console.log(snapshot.val());
//             dispatch({ type: PROFILE_FETCH, action: snapshot.val() });
//         });
        // .once('value', snapshot => {
        //     console.log(currentUser.uid);
        //     console.log('snapshot value');
        //     console.log(snapshot.val());
        //     dispatch({ type: PROFILE_FETCH, action: snapshot.val() });        
        // });
