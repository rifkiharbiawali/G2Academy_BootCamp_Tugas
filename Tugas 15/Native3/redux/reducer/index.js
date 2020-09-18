import {combineReducers} from 'redux';

import LoginReducer from './Login';

const SemuaReducer = combineReducers({Login: LoginReducer});

export default SemuaReducer;
