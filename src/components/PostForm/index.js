import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Form } from './styled';
import axios from '../../services/axios';
import Loading from '../Loading';

export default function PostForm({ MySwal, setPosts, posts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = [];

    if (!image)
      errors.push(
        'É necessário ter uma imagem do animal para concluir a postagem.'
      );

    if (title.length < 3 || title.length > 150)
      errors.push('O campo título deve conter entre 3 e 150 caracteres.');

    if (content.length < 3 || content.length > 500)
      errors.push('O campo conteúdo deve conter entre 3 e 500 caracteres.');

    if (errors.length > 0) return errors.map((error) => toast.error(error));

    MySwal.close();

    MySwal.fire({
      title: 'Atenção! Imagem sendo processada!',
      text: 'Aguarde um momento! Uma imagem enviada pode demorar algum tempo para ser processada. Por favor, não feche o navegador.',
      html: (
        <>
          <p>
            Aguarde um momento! Você enviou uma imagem e, por isso, pode demorar
            algum tempo para ser processada. Por favor, não feche o navegador
            até que receba a mensagem de confirmção.
          </p>
          <button type="button" onClick={() => MySwal.close()}>
            Fechar
          </button>
        </>
      ),
      showConfirmButton: false,
    });

    try {
      setIsLoading(true);
      const { data } = await axios.post('/posts', { title, content, image });

      toast.success('Postagem criada com sucesso');

      return setPosts([data, ...posts]);
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
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label htmlFor="swal-input2">
          Conteúdo
          <textarea
            id="swal-input2"
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
  setPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
