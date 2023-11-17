import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import axios from '../../services/axios';

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
    <div>
      <h1>teste</h1>
      {user && (
        <main>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <section>
            <h3>Posts</h3>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                  <small>{post.adopter.length}</small>
                </li>
              ))}
            </ul>
          </section>
        </main>
      )}
    </div>
  );
}

MyDonations.propTypes = {
  match: PropTypes.shape([]).isRequired,
};
