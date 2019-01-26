import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { loadingReducer } from './loading';


const reducers = combineReducers({
  auth: authReducer,
  loading: loadingReducer
});


export default reducers;