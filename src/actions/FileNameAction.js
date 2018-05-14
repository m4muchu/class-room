import { FILE_NAME_CHANGED } from './type';

export const fileNameChanged = ({ prop, value }) => {
    console.log('enter the action');
    return {
      type: FILE_NAME_CHANGED,
      payload: { prop, value }
    };
  };