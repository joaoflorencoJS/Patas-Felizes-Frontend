import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import axios from '../../services/axios';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Main } from './styled';
import whenCreatedWas from '../../services/whenCreatedWas';
import * as actions from '../../store/modules/auth/actions';
import EditProfileForm from '../../components/EditProfileForm';

export default function User({ match }) {
  const id = get(match, 'params.id', '');
  const dispatch = useDispatch();
  const { id: userId } = useSelector((state) => state.auth.user) ?? { id: '' };
  const isUserOwner = userId === id;

  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`/users/${id}`);

        setUser(data);
        setUserPosts(data.Posts);
      } catch (errors) {
        const status = get(errors, 'response.status', '');
        const error = get(
          errors,
          'response.data.error',
          'Erro ao obter o perfil do usuário.'
        );

        if (status === 401) {
          dispatch(actions.authFailure());
          toast.error('Token inválido. Faça login para continuar.');
        } else {
          toast.error(error);
          history.replace('/adote');
        }
      }
      setIsLoading(false);
    })();
  }, [id]);

  const handleEditProfile = (e) => {
    e.preventDefault();

    MySwal.fire({
      html: (
        <EditProfileForm
          MySwal={MySwal}
          isUser={isUserOwner}
          id={userId}
          setUserOrOng={setUser}
          userOrOng={user}
          setIsLoading={setIsLoading}
        />
      ),
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      {user && (
        <Main className="m-2 container">
          <div className="p-2">
            <div className="card">
              <div className="card-header">
                {user.profilePhoto ? (
                  <img
                    src={user.profilePhoto}
                    alt="Foto de perfil do dono do post"
                  />
                ) : (
                  <FaUserCircle size={34} />
                )}
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div>
                    <h1 className="card-title m-0">{user.name}</h1>
                  </div>

                  <div>
                    {isUserOwner ? (
                      <button
                        type="button"
                        className="d-flex justify-content-center"
                        onClick={handleEditProfile}
                      >
                        <FaEdit size={22} className="mr-1" /> Editar perfil
                      </button>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card sticky mb-2">
                      <div className="card-header">
                        <h1 className="card-title m-0">informações</h1>
                      </div>
                      <div className="card-body">
                        {user.user_info ? (
                          <p>{user.user_info}</p>
                        ) : (
                          <p className="text-center">
                            Nenhuma informação sobre este usuário adicionada
                            ainda...
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    {userPosts.map((post) => (
                      /* posts init */
                      <div key={post.id} className="card mb-2">
                        <div className="card-header">
                          {post.profilePhoto ? (
                            <img
                              src={post.url}
                              alt="Foto de perfil do dono do post"
                            />
                          ) : (
                            <FaUserCircle size={34} />
                          )}
                          <div>
                            <h4 className="card-title m-0">
                              <Link to={`/post/${post.id}`}>{post.title}</Link>
                            </h4>
                            <p className="font-italic text-muted">
                              {whenCreatedWas(post.created_at)}
                            </p>
                          </div>
                        </div>
                        <img className="card-img-top" src={post.url} alt="" />
                        <div className="card-body border-top">
                          <p className="card-text">{post.content}</p>
                        </div>
                      </div>
                      /* posts end */
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Main>
      )}
    </Container>
  );
}

User.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
