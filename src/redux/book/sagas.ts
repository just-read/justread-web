import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { getBookList, GET_BOOK_LIST_REQUEST } from './actions';

function* getBookListSaga(action: ReturnType<typeof getBookList.request>) {
  try {
  } catch (error) {
    yield put(getBookList.failure({ message: error.message }, {}));
  }
}

function* watchGetBookListSaga() {
  yield takeEvery(GET_BOOK_LIST_REQUEST, getBookListSaga);
}

export function* bookSaga() {
  yield all([fork(watchGetBookListSaga)]);
}
