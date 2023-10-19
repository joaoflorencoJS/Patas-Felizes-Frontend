import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function MyRoute({
  component: Component,
  isClosed,
  isClosedLoggedIn,
  ...rest
}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    toast.error(
      'É necessário o usuário estar logado para executar a ação desejada.'
    );
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  if (isLoggedIn && isClosedLoggedIn) {
    return (
      <Redirect to={{ pathname: '/adote', state: { prevPath: '/adote' } }} />
    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
  isClosedLoggedIn: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
  isClosedLoggedIn: PropTypes.bool,
};
