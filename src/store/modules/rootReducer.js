import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import registerReducer from './register/reducer';

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
});
