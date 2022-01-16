import { createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger'

import { persistStore } from "redux-persist";

import createSagaMiddleware from 'redux-saga'

import thunk from 'redux-thunk'

import rootReducer from './root-reducer.js'

import rootSaga from './root-saga.js'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, thunk, logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store
