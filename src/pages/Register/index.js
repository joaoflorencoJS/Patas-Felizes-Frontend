/* eslint-disable prefer-destructuring */
import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Article, Header, Main } from './styled';
import registerCat from './imgs/registerCat.webp';
import OngForm from '../../components/RegisterForms/OngForm ';
import UserForm from '../../components/RegisterForms/UserForm';
import Loading from '../../components/Loading';

export default function Register() {
  const isLoading = useSelector((state) => state.register.isLoading);

  return (
    <Main className="container">
      <Loading isLoading={isLoading} />
      <Header>
        <img src={registerCat} alt="Gato branco da tela de registro" />

        <div>
          <h2>Registrar-se no Patas Felizes</h2>
        </div>
      </Header>
      <Article className="row">
        {/* Cadastro usuário */}
        <UserForm />
        {/* Cadastro ONG */}
        <OngForm />
      </Article>

      <Container className="card p-3">
        <p>
          Já possui uma conta? <Link to="/login">Entre agora</Link>.
        </p>
      </Container>
    </Main>
  );
}
