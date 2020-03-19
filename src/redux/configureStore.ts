import createSagaMiddleware from '@redux-saga/core';
import Axios from 'axios';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { all, fork } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import book, { bookSaga } from './book';

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const rootReducer = combineReducers({
  auth,
  user,
  book,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export function* rootSaga() {
  yield all([fork(authSaga), fork(userSaga), fork(bookSaga)]);
}

sagaMiddleware.run(rootSaga);

export default store;
