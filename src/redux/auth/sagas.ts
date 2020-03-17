import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { SIGN_UP_REQUEST, signUp } from './actions';

function* signUpSaga(action: ReturnType<typeof signUp.request>) {
  try {
  } catch (error) {
    yield put(signUp.failure({ message: error.message }));
  }
}

function* watchSignUpSaga() {
  yield takeEvery(SIGN_UP_REQUEST, signUpSaga);
}

export function* authSaga() {
  yield all([fork(watchSignUpSaga)]);
}
