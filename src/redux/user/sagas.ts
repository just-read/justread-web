import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { signUp, SIGN_UP_REQUEST } from './actions';

function* signUpSaga(action: ReturnType<typeof signUp.request>) {
  try {
    console.log('');
  } catch (error) {
    yield put(signUp.failure({ message: error.message }));
  }
}

function* watchSignUpSaga() {
  yield takeEvery(SIGN_UP_REQUEST, signUpSaga);
}

export function* userSaga() {
  yield all([fork(watchSignUpSaga)]);
}
