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
          <label htmlFor="email">
            Nome de usuário ou endereço de email
            <input type="email" id="email" />
          </label>
          <label htmlFor="password">
            Senha
            <input type="password" id="password" />
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
