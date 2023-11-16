import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import axios from '../../services/axios';

export default function MyDonations({ match }) {
  const { id } = get(match, 'params', '');
  const { path } = match;
  const isUser = path.split('/')[1] === 'user';

  console.log(id, isUser);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          isUser ? `/users/${id}` : `/posts/${id}`
        );

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>teste</h1>
    </div>
  );
}

MyDonations.propTypes = {
  match: PropTypes.shape([]).isRequired,
};
