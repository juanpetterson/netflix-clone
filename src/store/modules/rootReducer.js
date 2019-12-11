import { combineReducers } from 'redux';

import auth from './auth/reducer';
import media from './media/reducer';

export default combineReducers({
  auth,
  media,
});
