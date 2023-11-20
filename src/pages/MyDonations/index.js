import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { Main } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function MyDonations({ match }) {
  const dispatch = useDispatch();

  const { id: sessionId } = useSelector(
    (state) => state.auth.user || state.auth.ong
  );
  const { id } = get(match, 'params', '');
  const { path } = match;
  const isUser = path.split('/')[1] === 'user';

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          isUser ? `adopters/user/${id}` : `adopters/ong/${id}`
        );

        setUser(data);
        setPosts(data.Posts);
      } catch (error) {
        const status = get(error, 'response.status', '');
        const err = get(error, 'response.data.errors', '');

        if (status === 401 && err) {
          dispatch(actions.authFailure());
          toast.error('Token inválido. Faça login para continuar.');
        } else {
          toast.error('Erro ao mostrar suas doações.');
        }
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      {user && (
        <Main className="m-2 container">
          <div className="p-2">
            <div className="card">
              <header className="card-header">
                {user.profilePhoto ? (
                  <img
                    src={user.profilePhoto}
                    alt="Foto de perfil do dono do post"
                  />
                ) : (
                  <FaUserCircle size={34} />
                )}
                <h1 className="card-title m-0">{user.name}</h1>
              </header>
              <section className="card-body">
                {posts.length > 0 ? (
                  <ul className="row">
                    {posts.map((post) => (
                      <li key={post.id} className="col-12 col-md-6 p-2">
                        <Link
                          to={
                            isUser
                              ? `/user/${sessionId}/post/${post.id}`
                              : `/ong/${sessionId}/post/${post.id}`
                          }
                        >
                          <div className="card">
                            <div className="card-body">
                              <h4 className="card-title">{post.title}</h4>
                              <small className="font-italic text-muted">
                                Número de pedidos para adotar o pet:{' '}
                                {post.adopter}
                              </small>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <h2 className="text-center">
                    Você ainda não possui nenhum post de doação.
                  </h2>
                )}
              </section>
            </div>
          </div>
        </Main>
      )}
    </Container>
  );
}

MyDonations.propTypes = {
  match: PropTypes.shape([]).isRequired,
};
