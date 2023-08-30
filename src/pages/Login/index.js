import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { LogoLink, Main } from './styled';
import LogoPatasFelizes from './imgs/LogoPatasFelizes.webp';

export default function Login() {
  return (
    <Main>
      <LogoLink to="/">
        <img src={LogoPatasFelizes} alt="Logo do Patas Felizes" />
      </LogoLink>

      <h2>Entrar no Patas Felizes</h2>

      <Container className="card p-3">
        <form action="">
          <label htmlFor="email">
            Entre com seu endereço de email
            <input type="email" id="email" />
          </label>
          <label htmlFor="password">
            Entre com a sua senha
            <input type="password" id="password" />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </Container>

      <Container className="card p-3">
        <p>
          Novo por aqui? <Link to="/register">Crie uma conta</Link>.
        </p>
      </Container>
    </Main>
  );
}
