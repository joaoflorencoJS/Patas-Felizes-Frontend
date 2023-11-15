import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function MyRoute({
  component: Component,
  isClosed,
  isClosedLoggedIn,
  isClosedForUser,
  ...rest
}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { user, ong } = useSelector((state) => state.auth);
  const { id } = user || ong;
  const { id: sessionId } = get(rest, 'computedMatch.params', '');

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

  if (isLoggedIn && isClosedForUser && sessionId !== id) {
    toast.error('Você não possui autorização para executar a ação desejada.');
    return (
      <Redirect
        to={{
          pathname: `${user ? '/user' : '/ong'}/${user ? user.id : ong.id}`,
        }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
  isClosedLoggedIn: false,
  isClosedForUser: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
  isClosedLoggedIn: PropTypes.bool,
  isClosedForUser: PropTypes.bool,
};
