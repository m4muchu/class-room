import { FILE_NAME_CHANGED } from '../actions/type';

const INITIAL_STATE = { fileName: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILE_NAME_CHANGED:
          return { ...state, [action.payload.prop]: action.payload.value };

        default:
            return state;
    }
}