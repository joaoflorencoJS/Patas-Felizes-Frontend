import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa';
import axios from '../../services/axios';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Section } from './styled';

export default function Ong({ match }) {
  const id = get(match, 'params.id', '');
  const [ong, setOng] = useState(null);
  const [ongPosts, setOngPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`/ongs/${id}`);

        setOng(data);
        setOngPosts(data.Posts);
      } catch (errors) {
        console.log(errors);
        const error = get(
          errors,
          'response.data.error',
          'Erro ao obter o perfil da Ong.'
        );

        toast.error(error);

        history.replace('/adote');
      }
      setIsLoading(false);
    })();
  }, [id]);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      {ong && (
        <Section className="m-2 container">
          <div className="p-2">
            <div className="card">
              <div className="card-header">
                {ong.profilePhoto ? (
                  <img
                    src={ong.profilePhoto}
                    alt="Foto de perfil do dono do post"
                  />
                ) : (
                  <FaUserCircle size={34} />
                )}
                <h1 className="card-title m-0">{ong.name}</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  {ongPosts.map((post) => (
                    <div className="col-md-6">
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
                          <h1 className="card-title m-0">{post.title}</h1>
                        </div>
                        <div className="card-body">
                          <img className="card-img-top" src={post.url} alt="" />

                          <p className="card-text">{post.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}
    </Container>
  );
}

Ong.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
