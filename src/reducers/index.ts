import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorsReducer,
});

export default rootReducer;
