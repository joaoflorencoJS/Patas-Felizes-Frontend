import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { Main } from './styled';
import registerCat from './imgs/registerCat.webp';

export default function Register() {
  return (
    <Main>
      <div>
        <img src={registerCat} alt="Gato branco da tela de registro" />

        <h2>Registrar-se no Patas Felizes</h2>
      </div>
      <Container className="card p-3">
        <form action="">
          <label htmlFor="name">
            Insira seu nome
            <input type="text" id="name" required />
          </label>
          <label htmlFor="email">
            Insira seu endereço de e-mail
            <input type="email" id="email" required />
          </label>
          <label htmlFor="password">
            Insira a sua senha
            <input type="password" id="password" required />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </Container>

      <Container className="card p-3">
        <p>
          Já possui uma conta? <Link to="/login">Entre agora</Link>.
        </p>
      </Container>
    </Main>
  );
}
