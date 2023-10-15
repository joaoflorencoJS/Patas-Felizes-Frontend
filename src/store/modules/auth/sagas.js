import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { isInt } from 'validator';
import { unMask } from 'remask';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* authRequest({ payload }) {
  const newPayload = { ...payload };

  if (isInt(unMask(payload.emailCNPJ))) {
    newPayload.cnpj = unMask(payload.emailCNPJ);
  } else {
    newPayload.email = payload.emailCNPJ;
  }

  try {
    const response = yield call(axios.post, '/tokens', newPayload);
    yield put(actions.authSuccess({ ...response.data }));

    toast.success('Usuário logado com sucesso.');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (error) {
    toast.error('Usuário ou senha inválidos');
    console.log(error);

    yield put(actions.authFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.AUTH_REQUEST, authRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
