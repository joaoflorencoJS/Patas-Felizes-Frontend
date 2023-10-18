/* eslint-disable default-param-last */
import * as types from '../types';

const initialState = {
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_ONG_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case types.REGISTER_ONG_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case types.REGISTER_ONG_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_USER_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case types.REGISTER_USER_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case types.REGISTER_USER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    default: {
      return state;
    }
  }
}
