import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* registerOngRequest({ payload }) {
  const { name, cnpj, password, isLoggedIn } = payload;
  if (isLoggedIn) {
    toast.error('Você não pode criar uma conta estando logado.');

    yield put(actions.registerOngFailure());

    return history.push('/');
  }
  try {
    yield call(axios.post, '/ongs', { name, cnpj, password });
    toast.success('Cadastro realizado com sucesso!');
    yield put(actions.registerOngSuccess({ name, cnpj, password }));
    return history.push('/login');
  } catch (error) {
    const errors = get(error, 'response.data.errors', []);

    if (errors.length) {
      errors.map((err) => toast.error(err));
    } else {
      toast.error('Erro desconhecido');
    }

    return yield put(actions.registerOngFailure());
  }
}

function* registerUserRequest({ payload }) {
  const { name, email, password, isLoggedIn } = payload;
  if (isLoggedIn) {
    toast.error('Você não pode criar uma conta estando logado.');

    yield put(actions.registerOngFailure());

    return history.push('/');
  }
  try {
    yield call(axios.post, '/users', { name, email, password });
    toast.success('Cadastro realizado com sucesso!');
    yield put(actions.registerOngSuccess({ name, email, password }));
    return history.push('/login');
  } catch (error) {
    const errors = get(error, 'response.data.errors', []);

    if (errors.length) {
      errors.map((err) => toast.error(err));
    } else {
      toast.error('Erro desconhecido');
    }

    return yield put(actions.registerOngFailure());
  }
}

export default all([
  takeLatest(types.REGISTER_ONG_REQUEST, registerOngRequest),
  takeLatest(types.REGISTER_USER_REQUEST, registerUserRequest),
]);
