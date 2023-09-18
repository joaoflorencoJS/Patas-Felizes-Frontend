/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { mask } from 'remask';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Container } from '../../styles/GlobalStyles';
import { Article, Form, Header, Main } from './styled';
import registerCat from './imgs/registerCat.webp';

export default function Register() {
  // Dados do Usuário
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassowrd, setUserPassword] = useState('');
  // Dados da ONG
  const [OngName, setOngName] = useState('');
  const [OngCnpj, setOngCnpj] = useState('');
  const [OngPassword, setOngPassword] = useState('');
  const [typeButtonUser, setTypeButtonUser] = useState('password');
  const [typeButtonOng, setTypeButtonOng] = useState('password');
  const activeEyeUser = document.querySelectorAll[4];
  const slashedEyeUser = document.querySelectorAll[4];
  const activeEyeOng = document.querySelectorAll[4];
  const slashedEyeOng = document.querySelectorAll[4];

  const handleEye = (typeButton, setTypeButton, activeEye, slashedEye) => {
    if (typeButton === 'password') {
      setTypeButton('text');
      activeEye.setAttribute('display', 'none');
      slashedEye.setAttribute('display', 'initial');
    } else {
      setTypeButton('password');
      activeEye.setAttribute('display', 'initial');
      slashedEye.setAttribute('display', 'none');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('teste');
  };

  return (
    <Main className="container">
      <Header>
        <img src={registerCat} alt="Gato branco da tela de registro" />

        <div>
          <h2>Registrar-se no Patas Felizes</h2>
        </div>
      </Header>
      <Article className="row">
        {/* Cadastro usuário */}
        <Container className="card p-3 col-sm">
          <h3>Criar conta usuário</h3>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="userName">
              Insira o seu nome
              <input
                type="text"
                id="userName"
                required
                placeholder="Seu nome"
                maxLength={100}
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </label>
            <label htmlFor="userEmail">
              Insira o seu endereço de e-mail
              <input
                type="email"
                id="userEmail"
                required
                placeholder="Seu e-mail"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
              />
            </label>
            <label htmlFor="userPassword">
              <div>
                Insira a sua senha
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={handleEye(
                    typeButtonUser,
                    setTypeButtonUser,
                    activeEyeUser,
                    slashedEyeUser
                  )}
                >
                  <FaEye size={20} />
                  <FaEyeSlash size={20} display="none" />
                </button>
              </div>
              <input
                type={typeButtonUser}
                id="userPassword"
                required
                placeholder="Sua senha"
                minLength={6}
                maxLength={60}
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassowrd}
              />
            </label>
            <button type="submit">Registrar usuário</button>
          </Form>
        </Container>
        {/* Cadastro ONG */}
        <Container className="card p-3 col-sm">
          <h3>Criar conta ONG</h3>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="OngName">
              Insira o seu nome
              <input
                type="text"
                id="OngName"
                required
                placeholder="Nome da ONG"
                maxLength={100}
                onChange={(e) => setOngName(e.target.value)}
                value={OngName}
              />
            </label>
            <label htmlFor="OngCnpj">
              Insira o seu CNPJ
              <input
                type="text"
                id="OngCnpj"
                placeholder="CPNJ da ONG"
                required
                onChange={(e) =>
                  setOngCnpj(mask(e.target.value, ['99.999.999/9999-99']))
                }
                value={OngCnpj}
              />
            </label>
            <label htmlFor="OngPassword">
              <div>
                Insira a sua senha
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={handleEye(
                    typeButtonOng,
                    setTypeButtonOng,
                    activeEyeOng,
                    slashedEyeOng
                  )}
                >
                  <FaEye size={20} />
                  <FaEyeSlash size={20} display="none" />
                </button>
              </div>
              <input
                type={typeButtonOng}
                id="OngPassword"
                placeholder="Senha da ONG"
                required
                minLength={6}
                maxLength={60}
                onChange={(e) => setOngPassword(e.target.value)}
                value={OngPassword}
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
