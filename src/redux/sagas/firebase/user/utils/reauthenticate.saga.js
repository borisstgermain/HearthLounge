import {call, put, takeEvery} from 'redux-saga/effects';
import {firebaseAuth} from "../../../../../keys";
import {error, success} from "../../../../../utils/messages";
import * as types from "../../../../types/firebase";
import * as actions from '../../../../actions/firebase/user/utils/reauthenticate.action';

export const firebaseReauthenticate = (password) => {
  const user = firebaseAuth().currentUser;
  const {email} = user;
  const credential = firebaseAuth.EmailAuthProvider.credential(email, password);

  return user
      .reauthenticateWithCredential(credential)
      .then(() => ({reauthenticated: true}))
      .catch(err => ({err: err.message}))
};

export function* firebaseReauthenticateSaga({payload}) {
  const {reauthenticated, err} = yield call(firebaseReauthenticate, payload);

  if (reauthenticated) {
    yield put(actions.firebaseReauthenticateSuccess(reauthenticated));
    yield success('Reauthenticated successfully!');
  } else {
    yield put(actions.firebaseReauthenticateError(err));
    yield error(err);
  }
}

export function* watchFirebaseReauthenticate() {
  yield takeEvery(types.FIREBASE_REAUTHENTICATE_REQUEST, firebaseReauthenticateSaga);
}