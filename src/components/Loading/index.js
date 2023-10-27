import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

export default function Loading({ isLoading }) {
  return (
    isLoading && (
      <Container>
        <div />
        <span>Carregando...</span>
      </Container>
    )
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
