import { combineReducers } from 'redux';
import reducers from './reducers/reducers';

const appReducers = combineReducers({ reducers });

export default appReducers;