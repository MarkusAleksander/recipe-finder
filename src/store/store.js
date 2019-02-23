import { createStore } from 'redux';
import { reducer } from './reducer/reducer';

// Create Store
export const store = createStore(reducer);