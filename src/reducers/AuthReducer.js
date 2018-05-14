import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, 
        LOGIN_USER_FAIL, LOGIN_USER, USER_NAME_CHANGE, SIGN_UP_CHANGED } from '../actions/type';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: '',
    user: ''    
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication failed', password: '', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true };
        case USER_NAME_CHANGE:
            return { ...state, name: action.payload };
        case SIGN_UP_CHANGED:
            return { ...state, [action.payload.prop]: action.payload.value };
        default: 
            return state;
    }
}