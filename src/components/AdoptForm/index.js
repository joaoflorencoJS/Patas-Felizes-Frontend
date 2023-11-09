import React, { useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { mask } from 'remask';
import { Form } from './styled';

export default function AdoptForm({ postId, isUser }) {
  const MySwal = withReactContent(Swal);
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState(0);
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [addressStreet, setAddressStreet] = useState('');
  const [addressDistrict, setAddressDistrict] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [addressComplement, setAddressComplement] = useState('');
  const [addressCity, setAddressCity] = useState('');
  const [addressState, setAddressState] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  console.log(postId, isUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    MySwal.close();
  };

  return (
    <>
      <h1>Formulário para adoção</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="fullName">
          Nome completo
          <input
            type="text"
            id="fullName"
            placeholder="Insira seu nome completo"
            value={fullName}
            minLength={3}
            maxLength={100}
            required
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <label htmlFor="age">
          Idade
          <input
            type="date"
            id="age"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        {isUser && (
          <label htmlFor="cpf">
            CPF
            <input
              type="text"
              id="cpf"
              placeholder="Insira seu CPF"
              value={cpf}
              onChange={(e) => setCpf(mask(e.target.value, ['999.999.999-99']))}
            />
          </label>
        )}
        <label htmlFor="cep">
          CEP
          <input
            type="text"
            id="cep"
            placeholder="Insira seu CEP"
            value={cep}
            required
            onChange={(e) => setCep(mask(e.target.value, ['99999-999']))}
          />
        </label>
        <div className="row m-0">
          <label
            htmlFor="addressStreet"
            className="col-md-7 p-0 mb-3 mb-md-0 pr-md-2"
          >
            Rua
            <input
              type="text"
              id="addressStreet"
              placeholder="Insira sua Rua"
              minLength={3}
              maxLength={120}
              value={addressStreet}
              required
              onChange={(e) => setAddressStreet(e.target.value)}
            />
          </label>
          <label htmlFor="addressNumber" className="col-md-5 p-0 pl-md-2">
            Número da casa
            <input
              type="text"
              id="addressNumber"
              maxLength={8}
              required
              placeholder="Insira seu Número"
              value={addressNumber}
              onChange={(e) => setAddressNumber(e.target.value)}
            />
          </label>
        </div>
        <label htmlFor="addressDistrict">
          Bairro
          <input
            type="text"
            id="addressDistrict"
            minLength={3}
            maxLength={100}
            required
            placeholder="Insira seu Bairro"
            value={addressDistrict}
            onChange={(e) => setAddressDistrict(e.target.value)}
          />
        </label>
        <label htmlFor="addressComplement">
          Complemento
          <input
            type="text"
            id="addressComplement"
            maxLength={50}
            placeholder="Insira seu Complemento"
            value={addressComplement}
            onChange={(e) => setAddressComplement(e.target.value)}
          />
        </label>
        <div className="row m-0">
          <label
            htmlFor="addressCity"
            className="col-md-7 p-0 mb-3 mb-md-0 pr-md-2"
          >
            Cidade
            <input
              type="text"
              id="addressCity"
              minLength={3}
              maxLength={50}
              placeholder="Insira sua Cidade"
              value={addressCity}
              required
              onChange={(e) => setAddressCity(e.target.value)}
            />
          </label>
          <label htmlFor="addressState" className="col-md-5 p-0 pl-md-2">
            Estado (sigla)
            <input
              type="text"
              id="addressState"
              placeholder="Insira a sigla do Estado"
              minLength={2}
              maxLength={2}
              value={addressState}
              required
              onChange={(e) =>
                setAddressState(mask(e.target.value.toUpperCase(), ['AA']))
              }
            />
          </label>
        </div>
        <div>
          <h5>Insira, pelo menos, uma forma de contato</h5>
          <label htmlFor="contactPhone">
            Telefone
            <input
              type="text"
              id="contactPhone"
              placeholder="Insira seu Telefone"
              value={contactPhone}
              onChange={(e) =>
                setContactPhone(mask(e.target.value, ['(99) 99999-9999']))
              }
            />
          </label>
          <label htmlFor="contactEmail">
            E-mail
            <input
              type="email"
              id="contactEmail"
              placeholder="Insira seu E-mail"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Adotar</button>
      </Form>
    </>
  );
}

AdoptForm.propTypes = {
  postId: PropTypes.string.isRequired,
  isUser: PropTypes.bool.isRequired,
};
