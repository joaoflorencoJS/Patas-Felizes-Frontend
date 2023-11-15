import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from '../../services/axios';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Main } from './styled';
import whenCreatedWas from '../../services/whenCreatedWas';

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
        <Main className="m-2 container">
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
                  <div className="col-lg-4">
                    <div className="card sticky mb-2">
                      <div className="card-header">
                        <h1 className="card-title m-0">informações</h1>
                      </div>
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eligendi impedit voluptatibus consequatur
                          tenetur odit! Harum ducimus inventore blanditiis
                          quidem excepturi suscipit ab ut, deleniti
                          necessitatibus ipsam? Nostrum culpa voluptatum
                          ratione?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    {ongPosts.map((post) => (
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

Ong.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
