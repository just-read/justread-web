import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { all, fork } from 'redux-saga/effects';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  user
});

export type ApplicationState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export function* rootSaga() {
  yield all([fork(userSaga)]);
}

sagaMiddleware.run(rootSaga);

export default store;
