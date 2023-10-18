import * as types from '../types';

export function registerOngRequest(payload) {
  return {
    type: types.REGISTER_ONG_REQUEST,
    payload,
  };
}
export function registerOngSuccess(payload) {
  return {
    type: types.REGISTER_ONG_SUCCESS,
    payload,
  };
}
export function registerOngFailure(payload) {
  return {
    type: types.REGISTER_ONG_FAILURE,
    payload,
  };
}

export function registerUserRequest(payload) {
  return {
    type: types.REGISTER_USER_REQUEST,
    payload,
  };
}
export function registerUserSuccess(payload) {
  return {
    type: types.REGISTER_USER_SUCCESS,
    payload,
  };
}
export function registerUserFailure(payload) {
  return {
    type: types.REGISTER_USER_FAILURE,
    payload,
  };
}
