import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { isEmail, isInt } from 'validator';
import { toast } from 'react-toastify';
import { mask, unMask } from 'remask';
import { Container } from '../../styles/GlobalStyles';
import { Form, Header, LogoLink, Main } from './styled';
import LogoPatasFelizes from './imgs/LogoPatasFelizes.webp';

export default function Login() {
  const [emailCNPJ, setEmailCNPJ] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailCPNJ = (e) => {
    if (isInt(unMask(e.target.value))) {
      return setEmailCNPJ(mask(e.target.value, ['99.999.999/9999-99']));
    }

    return setEmailCNPJ(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErros = false;

    if (isInt(unMask(emailCNPJ))) {
      if (unMask(emailCNPJ).length < 14) {
        formErros = true;
        toast.error('E-mail ou CNPJ inválido');
      }
    } else if (!isEmail(emailCNPJ)) {
      formErros = true;
      toast.error('E-mail ou CNPJ inválido');
    }

    if (password.length < 8 || password.length > 60) {
      formErros = true;
      toast.error('Senha inválida');
    }

    if (formErros) return;

    toast.success('Logado com sucesso');
  };

  return (
    <Main className="container">
      <Header>
        <LogoLink to="/">
          <img src={LogoPatasFelizes} alt="Logo do Patas Felizes" />
        </LogoLink>

        <h2>Entrar no Patas Felizes </h2>
      </Header>

      <Container className="card p-3">
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Entre com seu email ou CNPJ
            <input
              type="text"
              id="email"
              placeholder="Email ou CNPJ"
              onChange={handleEmailCPNJ}
              value={emailCNPJ}
            />
          </label>
          <label htmlFor="password">
            Entre com a sua senha
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrar com senha"
            />
          </label>
          <button type="submit">Entrar</button>
        </Form>
      </Container>

      <Container className="card p-3">
        <p>
          Novo por aqui? <Link to="/register">Crie uma conta</Link>.
        </p>
      </Container>
    </Main>
  );
}
