import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { Main } from './styled';

export default function MyDonations({ match }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = get(match, 'params', '');
  const { path } = match;
  const isUser = path.split('/')[1] === 'user';

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          isUser ? `adopters/user/${id}` : `adopters/ong/${id}`
        );

        setUser(data);
        setPosts(data.Posts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
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
                <h3>Posts</h3>

                <ul className="row">
                  {posts.map((post) => (
                    <li key={post.id} className="col-6">
                      <h4>{post.title}</h4>
                      <p>{post.description}</p>
                      <small className="font-italic text-muted">
                        Número de pedidos para adotar o pet:{' '}
                        {post.adopter.length}
                      </small>
                    </li>
                  ))}
                </ul>
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
