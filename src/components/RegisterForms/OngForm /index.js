import React, { useState } from 'react';
import { mask, unMask } from 'remask';
import { toast } from 'react-toastify';
import { Container } from '../../../styles/GlobalStyles';
import { Form } from '../styled';
import HandlePasswordEye from '../../HandlePasswordEye';

export default function OngForm() {
  const [OngName, setOngName] = useState('');
  const [OngCnpj, setOngCnpj] = useState('');
  const [OngPassword, setOngPassword] = useState('');
  const [OngRepeatPassword, setOngRepeatPassword] = useState('');
  const [typeButtonOng, setTypeButtonOng] = useState('password');
  const [typeButtonRepeatOng, setTypeButtonRepeatOng] = useState('password');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (unMask(OngCnpj).length < 14) {
      formErrors = true;
      toast.error('CNPJ inválido!');
    }

    if (OngPassword.length < 8 || OngPassword.length > 60) {
      formErrors = true;
      toast.error('Insira uma senha entre 8 e 60 caracteres.');
    }

    if (OngPassword !== OngRepeatPassword) {
      formErrors = true;
      toast.error('As senhas não coincidem.');
    }

    if (formErrors) return;

    toast.success('Cadastrado com sucesso!');
  };

  return (
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
            minLength={3}
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
            <HandlePasswordEye
              idActiveEye="activeEyeOng"
              idSlashedEye="slashedEyeOng"
              typeButton={typeButtonOng}
              setTypeButton={setTypeButtonOng}
            />
          </div>
          <input
            type={typeButtonOng}
            id="OngPassword"
            placeholder="Senha da ONG"
            required
            maxLength={60}
            onChange={(e) => setOngPassword(e.target.value)}
            value={OngPassword}
          />
        </label>
        <label htmlFor="OngRepeatPassword">
          <div>
            Insira a sua senha
            <HandlePasswordEye
              idActiveEye="activeEyeRepeatOng"
              idSlashedEye="slashedEyeRepeatOng"
              typeButton={typeButtonRepeatOng}
              setTypeButton={setTypeButtonRepeatOng}
            />
          </div>
          <input
            type={typeButtonRepeatOng}
            id="OngRepeatPassword"
            placeholder="Repita a senha da ONG"
            required
            maxLength={60}
            onChange={(e) => setOngRepeatPassword(e.target.value)}
            value={OngRepeatPassword}
          />
        </label>
        <button type="submit">Registrar ONG</button>
      </Form>
    </Container>
  );
}
