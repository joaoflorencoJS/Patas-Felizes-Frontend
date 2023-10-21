import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import PostForm from '../../components/PostForm';
import { Section } from './styled';

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
      html: <PostForm MySwal={MySwal} />,
      showConfirmButton: false,
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
      <h1>posts</h1>
      <Section className="row m-0 container">
        {posts.map((post) => (
          <div key={post.id} className="col-sm-6 col-md-4 col-lg-3 p-2">
            <div className="card">
              {/* <img className="card-img-top" src={post.url} alt="" /> */}
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p>{post.content}</p>
                <Link to={`/post/${post.id}/show`}>Ver mais</Link>
              </div>
            </div>
          </div>
        ))}
      </Section>
    </Container>
  );
}
