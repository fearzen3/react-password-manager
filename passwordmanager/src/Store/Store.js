import {createLogger} from 'redux-logger'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import accounts from '../Reducers/AccountReducer'

const store = createStore(
  combineReducers({accounts}),
  {},
  applyMiddleware( createLogger(), thunk, promise()));

  export default store
