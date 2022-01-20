import { createStore, applyMiddleware } from "redux";

// import logger from 'redux-logger'

import { persistStore } from "redux-persist";

import createSagaMiddleware from "redux-saga";

import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

import rootSaga from "./root-sagas";

const logger = require("redux-logger");

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
