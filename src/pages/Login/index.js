import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { isEmail, isInt } from 'validator';
import { toast } from 'react-toastify';
import { mask, unMask } from 'remask';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form, Header, LogoLink, Main } from './styled';
import LogoPatasFelizes from './imgs/LogoPatasFelizes.webp';
import HandlePasswordEye from '../../components/HandlePasswordEye';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function Login(props) {
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/');
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [emailCNPJ, setEmailCNPJ] = useState('');
  const [password, setPassword] = useState('');
  const [typeButtonLogin, setTypeButtonLogin] = useState('password');

  const handleEmailCPNJ = (e) => {
    if (isInt(unMask(e.target.value))) {
      return setEmailCNPJ(mask(e.target.value, ['99.999.999/9999-99']));
    }

    return setEmailCNPJ(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (isInt(unMask(emailCNPJ))) {
      if (unMask(emailCNPJ).length < 14) {
        formErrors = true;
        toast.error('E-mail ou CNPJ inválido.');
      }
    } else if (!isEmail(emailCNPJ)) {
      formErrors = true;
      toast.error('E-mail ou CNPJ inválido.');
    }

    if (password.length < 8 || password.length > 60) {
      formErrors = true;
      toast.error('Senha inválida.');
    }

    if (formErrors) return;

    dispatch(actions.authRequest({ emailCNPJ, password, prevPath }));
  };

  return (
    <Main className="container">
      <Loading isLoading={isLoading} />
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
              required
              placeholder="Email ou CNPJ"
              onChange={handleEmailCPNJ}
              value={emailCNPJ}
            />
          </label>
          <label htmlFor="password">
            <div>
              Entre com a sua senha
              <HandlePasswordEye
                idActiveEye="activeEyeLogin"
                idSlashedEye="slashedEyeLogin"
                typeButton={typeButtonLogin}
                setTypeButton={setTypeButtonLogin}
              />
            </div>
            <input
              type={typeButtonLogin}
              id="password"
              required
              placeholder="Entrar com senha"
              maxLength={60}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
