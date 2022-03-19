/* eslint-disable import/prefer-default-export */

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import {rootReducer} from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

export {store};
