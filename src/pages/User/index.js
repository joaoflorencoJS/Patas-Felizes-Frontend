import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Main } from './styled';
import whenCreatedWas from '../../services/whenCreatedWas';

export default function User({ match }) {
  const id = get(match, 'params.id', '');
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`/users/${id}`);

        console.log(data);
        setUser(data);
        setUserPosts(data.Posts);
      } catch (errors) {
        console.log(errors);
        const error = get(
          errors,
          'response.data.error',
          'Erro ao obter o perfil do usuário.'
        );

        toast.error(error);

        history.replace('/adote');
      }
      setIsLoading(false);
    })();
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
                <h1 className="card-title m-0">{user.name}</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card sticky mb-2">
                      <div className="card-header">
                        <h1 className="card-title m-0">informações</h1>
                      </div>
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Labore temporibus eligendi placeat omnis,
                          molestiae libero quae voluptatum. Ipsa ex iste totam
                          blanditiis similique quod velit architecto tempora,
                          nisi itaque qui!
                        </p>
                        <div>Scroll position: {scrollY}</div>
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
                              <Link to={`/post/${post.id}/show`}>
                                {post.title}
                              </Link>
                            </h4>
                            <p>{whenCreatedWas(post.created_at)}</p>
                          </div>
                        </div>
                        <img className="card-img-top" src={post.url} alt="" />
                        <div className="card-body">
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
