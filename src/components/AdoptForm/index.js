import React, { useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { mask, unMask } from 'remask';
import { toast } from 'react-toastify';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { get } from 'lodash';
import myAxios from '../../services/axios';
import { Form } from './styled';
import ValidaCPF from '../../services/ValidaCPF';
import Loading from '../Loading';

function calcAge(birthDate) {
  const [year, month, day] = birthDate.split('-');
  const today = new Date();
  const birth = new Date(year, month - 1, day);
  let age = today.getFullYear() - birth.getFullYear();
  const birthMonth = today.getMonth() - birth.getMonth();

  if (
    birthMonth < 0 ||
    (birthMonth === 0 && today.getDate() < birth.getDate())
  ) {
    age -= 1;
  }

  return age;
}

export default function AdoptForm({ postId, isUser, setAdopter, adopter }) {
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
  const [isLoading, setIsLoading] = useState(false);

  if (contactEmail) {
    console.log('teste', age);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (calcAge(age) < 18) {
      formErrors = true;
      toast.error('Você precisa ter mais de 18 anos para adotar um pet.');
    }

    if (isUser) {
      if (!ValidaCPF.validaCpf(unMask(cpf))) {
        formErrors = true;
      }
    }

    if (!contactPhone && !contactEmail) {
      formErrors = true;
      toast.error('Você precisa inserir, pelo menos, uma forma de contato.');
    }

    if (contactEmail && !isEmail(contactEmail)) {
      formErrors = true;
      toast.error('Você precisa inserir um E-mail válido.');
    }

    if (contactPhone && contactPhone.length < 15) {
      formErrors = true;
      toast.error('Você precisa inserir um número de telefone válido.');
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      const { data } = await myAxios.post('/adopters', {
        full_name: fullName,
        age,
        cpf: cpf ? unMask(cpf) : null,
        cep: unMask(cep),
        address_street: addressStreet,
        address_district: addressDistrict,
        address_number: addressNumber,
        address_complement: addressComplement,
        address_city: addressCity,
        address_state: addressState,
        contact_phone: contactPhone ? unMask(contactPhone) : null,
        contact_email: contactEmail || null,
        post_id: postId,
      });

      toast.success('Pedido de adoção enviado com sucesso!');

      setAdopter([{ id: data.id, user_id: data.user_id }, ...adopter]);
    } catch (errors) {
      const arrayErrors = get(errors, 'response.data.errors', '');

      if (arrayErrors) {
        arrayErrors.map((error) => toast.error(error));
      } else {
        toast.error('Erro ao enviar pedido de adoção.');
      }
    }
    setIsLoading(false);

    MySwal.close();
  };

  return (
    <>
      <Loading isLoading={isLoading} />
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
              required
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
            minLength={9}
            maxLength={9}
            onChange={async (e) => {
              setCep(mask(e.target.value, ['99999-999']));

              const onChangeCep = unMask(e.target.value);

              if (onChangeCep.length === 8) {
                setIsLoading(true);
                try {
                  const { data } = await axios.get(
                    `https://viacep.com.br/ws/${onChangeCep}/json`
                  );

                  console.log(data);

                  if (data.erro) {
                    MySwal.fire({
                      icon: 'question',
                      title:
                        'Você tem certeza que o CEP inserido está correto?',
                      text: 'Caso o CEP esteja correto, atualize o banco de dados do ViaCep!',
                      showConfirmButton: true,
                      showDenyButton: true,
                      denyButtonText: 'NÃO',
                    }).then((result) => {
                      if (result.isConfirmed) {
                        MySwal.fire({
                          html: (
                            <div>
                              <iframe
                                title="ViaCep"
                                id="viacep-iframe"
                                src="https://viacep.com.br/embed/"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  border: '1px solid #888',
                                  borderRadius: '5px',
                                  background: '#fcfcfc',
                                }}
                              />
                            </div>
                          ),
                        });
                      } else if (result.isDenied) {
                        MySwal.fire({
                          html: <AdoptForm postId={postId} isUser={!!isUser} />,
                          showConfirmButton: false,
                          showCloseButton: true,
                        });
                      }
                    });
                    return;
                  }

                  setAddressStreet(data.logradouro);
                  setAddressDistrict(data.bairro);
                  setAddressCity(data.localidade);
                  setAddressState(data.uf);
                } catch (error) {
                  console.log(error);
                } finally {
                  setIsLoading(false);
                }
              }
            }}
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
  setAdopter: PropTypes.func.isRequired,
  adopter: PropTypes.shape([]).isRequired,
};
