import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import FileNameReducer from './FileNameReducer';

export default combineReducers({
    auth: AuthReducer,
    prof: ProfileReducer,
    file: FileNameReducer
});