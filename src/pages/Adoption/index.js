import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoPlus } from 'react-icons/go';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import PostForm from '../../components/PostForm';
import { Section } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Adoption() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth.user || state.auth.ong);

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get('/posts');

        return setPosts(data);
      } catch (error) {
        const status = get(error, 'response.status', '');

        if (status === 401) {
          dispatch(actions.authFailure());
          return toast.error('Token inválido. Faça login para continuar.');
        }

        return toast.error('Erro ao carregar os posts.');
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleCreatePost = async () => {
    MySwal.fire({
      html: <PostForm MySwal={MySwal} setPosts={setPosts} posts={posts} />,
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <div>
        <h1>Adoção</h1>
      </div>
      <Section className="row m-0 container">
        {posts && (
          <div className="col-sm-6 col-md-4 col-lg-3 p-2">
            <button
              type="button"
              onClick={handleCreatePost}
              className="button-default"
            >
              <div className="card">
                <GoPlus className="card-img-top" size="100%" />
                <div className="card-body text-center">
                  <h5 className="card-title">Criar nova postagem</h5>
                  <p className="font-weight-normal">
                    Para doar seu animalzinho!
                  </p>
                </div>
              </div>
            </button>
          </div>
        )}
        {posts.map((post) => (
          <div key={post.id} className="col-sm-6 col-md-4 col-lg-3 p-2">
            <div className="card">
              <img className="card-img-top" src={post.url} alt="" />
              <div className="card-body border-top">
                <h5 className="card-title">{post.title}</h5>
                <p>{post.content}</p>
                <Link to={`/post/${post.id}`}>Ver mais</Link>
              </div>
            </div>
          </div>
        ))}
      </Section>
    </Container>
  );
}
