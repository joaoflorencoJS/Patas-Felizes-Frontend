import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Form } from './styled';
import axios from '../../services/axios';
import Loading from '../Loading';

export default function PostForm({ MySwal }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    MySwal.close();

    if (image) {
      MySwal.fire({
        title: 'Atenção! Imagem sendo processada!',
        text: 'Aguarde um momento! Uma imagem enviada pode demorar algum tempo para ser processada. Por favor, não feche o navegador.',
        html: (
          <>
            <p>
              Aguarde um momento! Você enviou uma imagem e, por isso, pode
              demorar algum tempo para ser processada. Por favor, não feche o
              navegador até que receba a mensagem de confirmção.
            </p>
            <button type="button" onClick={() => MySwal.close()}>
              Fechar
            </button>
          </>
        ),
        showConfirmButton: false,
      });
    }

    try {
      setIsLoading(true);
      const response = await axios.post('/posts', { title, content, image });

      toast.success('Postagem criada com sucesso');

      return console.log(response);
    } catch (err) {
      const error = get(err, 'response.data.errors', '');
      if (error) return toast.error(error);

      console.log(err);
      return toast.error('Erro ao criar postagem');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onloadend = () => {
      setImage(fileReader.result);
    };
  };

  return (
    <>
      <h1>Criar uma postagem</h1>
      <Form onSubmit={handleSubmit}>
        <Loading isLoading={isLoading} />
        <label htmlFor="swal-input1">
          Título
          <input
            type="text"
            id="swal-input1"
            // className="swal2-input"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label htmlFor="swal-input2">
          Conteúdo
          <textarea
            id="swal-input2"
            // className="swal2-input"
            placeholder="Conteúdo"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </label>
        <label htmlFor="image">
          {image ? (
            <img src={image} alt="" />
          ) : (
            <span>Selecione uma imagem</span>
          )}
          <input
            type="file"
            id="image"
            onChange={handleImage}
            accept=".jpg,.png,.jpeg"
          />
        </label>
        <button type="submit" className="swal2-input">
          Postar
        </button>
      </Form>
    </>
  );
}

PostForm.propTypes = {
  MySwal: PropTypes.func.isRequired,
};
