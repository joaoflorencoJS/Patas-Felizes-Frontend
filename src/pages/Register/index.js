import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { Article, Form, Header, Main } from './styled';
import registerCat from './imgs/registerCat.webp';

export default function Register() {
  return (
    <Main className="container">
      <Header>
        <img src={registerCat} alt="Gato branco da tela de registro" />

        <h2>Registrar-se no Patas Felizes</h2>
      </Header>
      <Article className="row">
        {/* Cadastro usuário */}
        <Container className="card p-3 col-sm">
          <h3>Criar conta usuário</h3>
          <Form action="">
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
            <button type="submit">Registrar usuário</button>
          </Form>
        </Container>
        {/* Cadastro ONG */}
        <Container className="card p-3 col-sm">
          <h3>Criar conta ONG</h3>
          <Form action="">
            <label htmlFor="name">
              Insira o seu nome
              <input
                type="text"
                id="name"
                placeholder="Insira o seu nome."
                required
              />
            </label>
            <label htmlFor="cpnj">
              Insira o seu CPNJ
              <input
                type="text"
                id="cpnj"
                placeholder="Insira o seu CPNJ."
                required
              />
            </label>
            <label htmlFor="password">
              Insira a sua senha
              <input
                type="password"
                id="cpnj"
                placeholder="Insira a sua senha."
                required
              />
            </label>
            <button type="submit">Registrar ONG</button>
          </Form>
        </Container>
      </Article>

      <Container className="card p-3">
        <p>
          Já possui uma conta? <Link to="/login">Entre agora</Link>.
        </p>
      </Container>
    </Main>
  );
}
