import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Form } from './styled';
import axios from '../../services/axios';
import Loading from '../Loading';

export default function EditProfileForm({
  MySwal,
  isUser,
  id,
  setUserOrOng,
  userOrOng,
  setIsLoading,
}) {
  const [name, setName] = useState(userOrOng.name);
  const [info, setInfo] = useState(
    userOrOng.user_info || userOrOng.ong_info || ''
  );
  const [isLoadingForEdit, setIsLoadingForEdit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setIsLoadingForEdit(true);
    try {
      let updatedProfile = null;
      if (isUser) {
        updatedProfile = await axios.put(`/users/${id}`, {
          name,
          user_info: info,
        });
      } else {
        updatedProfile = await axios.put(`/ongs/${id}`, {
          name,
          ong_info: info,
        });
      }

      toast.success('Perfil atualizado com sucesso!');

      setUserOrOng(updatedProfile.data);

      MySwal.close();
    } catch (error) {
      const err = get(
        error,
        'response.data.error',
        'Erro ao atualizar perfil.'
      );

      toast.error(err);
    } finally {
      setIsLoading(false);
      setIsLoadingForEdit(false);
    }
  };

  return (
    <>
      <Loading isLoading={isLoadingForEdit} />
      <h1>Editar perfil</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="profileName">
          Nome de perfil:
          <input
            type="text"
            id="profileName"
            placeholder="Nome de perfil"
            onChange={(e) => setName(e.target.value)}
            value={name}
            minLength={3}
            maxLength={100}
          />
        </label>
        <label htmlFor="profileInfo">
          Informações de perfil:
          <textarea
            id="profileInfo"
            placeholder="Informações do perfil"
            onChange={(e) => setInfo(e.target.value)}
            value={info}
            maxLength={500}
          />
        </label>
        <span className="text-muted font-italic text-right">
          Altere somente os campos que deseja editar.
        </span>

        <button type="submit">Salvar</button>
      </Form>
    </>
  );
}

EditProfileForm.defaultProps = {
  isUser: false,
};

EditProfileForm.propTypes = {
  isUser: PropTypes.bool,
  MySwal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  setUserOrOng: PropTypes.func.isRequired,
  userOrOng: PropTypes.shape({
    name: PropTypes.string,
    user_info: PropTypes.string,
    ong_info: PropTypes.string,
  }).isRequired,
  setIsLoading: PropTypes.func.isRequired,
};
