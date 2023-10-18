import React, { useState } from 'react';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../../styles/GlobalStyles';
import { Form } from '../styled';
import HandlePasswordEye from '../../HandlePasswordEye';
import * as actions from '../../../store/modules/register/actions';

export default function UserForm() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRepeatPassowrd, setUserRepeatPassword] = useState('');
  const [typeButtonUser, setTypeButtonUser] = useState('password');
  const [typeButtonRepeatUser, setTypeButtonRepeatUser] = useState('password');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(userEmail)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if (userPassword.length < 8 || userPassword.length > 60) {
      formErrors = true;
      toast.error('Insira uma senha entre 8 e 60 caracteres.');
    }

    if (userPassword !== userRepeatPassowrd) {
      formErrors = true;
      toast.error('As senhas não coincidem.');
    }

    if (formErrors) return;

    dispatch(
      actions.registerUserRequest({
        name: userName,
        email: userEmail,
        password: userPassword,
        isLoggedIn,
      })
    );
  };

  return (
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
            minLength={3}
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
            <HandlePasswordEye
              idActiveEye="activeEyeUser"
              idSlashedEye="slashedEyeUser"
              typeButton={typeButtonUser}
              setTypeButton={setTypeButtonUser}
            />
          </div>
          <input
            type={typeButtonUser}
            id="userPassword"
            required
            placeholder="Sua senha"
            maxLength={60}
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
          />
        </label>
        <label htmlFor="userRepeatPassword">
          <div>
            Repita a sua senha
            <HandlePasswordEye
              idActiveEye="activeEyeRepeatUser"
              idSlashedEye="slashedEyeRepeatUser"
              typeButton={typeButtonRepeatUser}
              setTypeButton={setTypeButtonRepeatUser}
            />
          </div>
          <input
            type={typeButtonRepeatUser}
            id="userRepeatPassword"
            required
            placeholder="Repita a sua senha"
            maxLength={60}
            onChange={(e) => setUserRepeatPassword(e.target.value)}
            value={userRepeatPassowrd}
          />
        </label>
        <button type="submit">Registrar usuário</button>
      </Form>
    </Container>
  );
}
