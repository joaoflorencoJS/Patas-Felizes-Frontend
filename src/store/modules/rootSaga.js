import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import register from './register/sagas';

export default function* rootSaga() {
  return yield all([auth, register]);
}
