import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Adoption() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data } = await axios.get('/posts');
      setPosts(data);
      console.log(data);
      setIsLoading(false);
    })();
  }, []);

  const handleCreatePost = async () => {
    MySwal.fire({
      title: <p>Hello World</p>,
      html: (
        <div>
          <label htmlFor="swal-input1">
            Título
            <input
              id="swal-input1"
              className="swal2-input"
              placeholder="Título"
            />
          </label>
          <label htmlFor="swal-input2">
            Conteúdo
            <input
              id="swal-input2"
              className="swal2-input"
              placeholder="Conteúdo"
            />
          </label>
        </div>
      ),

      // html: `
      // <label for="swal-input1">Título
      //   <input id="swal-input1" class="swal2-input" placeholder="Título">
      // </label>
      // <label for="swal-input2">Conteúdo
      //   <input id="swal-input2" class="swal2-input" placeholder="Conteúdo">
      // </label>`,
    });
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <div>
        <h1>Adoção</h1>
        <button type="button" onClick={handleCreatePost}>
          Criar postagem
        </button>
      </div>
      <div>
        <h1>posts</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            {/* <img src={post.url} alt="" /> */}
          </div>
        ))}
      </div>
    </Container>
  );
}
