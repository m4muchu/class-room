import { PROFILE_FETCH, FETCH_BOOKS, FILE_NAME_CHANGED } from '../actions/type';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            console.log('enter the reducer');
            return action.payload;
        case FILE_NAME_CHANGED:
            return { ...state, fileName: action.payload };

        default:
            return state;
    }
}