import {createLogger} from 'redux-logger'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import accounts from '../Reducers/AccountReducer'

const Middleware = applyMiddleware( createLogger(), thunk, promise())

const store = createStore(combineReducers({accounts}),{},compose(Middleware,window.devToolsExtension ? window.devToolsExtension() : f => f));

  export default store




