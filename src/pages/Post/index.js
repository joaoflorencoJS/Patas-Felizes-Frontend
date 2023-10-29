import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';
import { Section } from './styled';

export default function Post({ match }) {
  const id = get(match, 'params.id', '');
  const [post, setPost] = useState(null);
  const [ownerPost, setOwnerPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/posts/${id}`);

        if (!data.user) {
          setOwnerPost(data.ong);
          delete data.ong;
        } else {
          setOwnerPost(data.user);
          delete data.user;
        }

        const date = new Date(data.created_at);
        const dateNow = new Date();

        const diffNowPost = Math.floor((dateNow - date) / 1000 / 60);

        let formattedDate;

        if (diffNowPost / 60 >= 24) {
          formattedDate = `postado há ${Math.floor(
            diffNowPost / 60 / 24
          )} dias atrás`;
        } else if (diffNowPost >= 60) {
          formattedDate = `postado há  ${Math.floor(
            diffNowPost / 60
          )} horas atrás`;
        } else {
          formattedDate = `postado há ${diffNowPost} minutos atrás`;
        }

        console.log(data);

        data.created_at = formattedDate;

        setPost(data);
      } catch (errors) {
        const error = get(errors, 'response.data.error', '');

        if (error) {
          toast.error(error);
        } else {
          toast.error('Erro ao obter o post.');
        }

        history.replace('/adote');
      }
      setIsLoading(false);
    })();
  }, [id]);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      {post && (
        <Section className="mt-2">
          <div className="p-2">
            <div className="card">
              <div className="card-header">
                {ownerPost.profilePhoto ? (
                  <img
                    src={ownerPost.profilePhoto}
                    alt="Foto de perfil do dono do post"
                  />
                ) : (
                  <FaUserCircle size={34} />
                )}
                <div>
                  <h4 className="m-0">{ownerPost.name}</h4>
                  <p>{post.created_at}</p>
                </div>
              </div>
              <img
                className="card-img-top"
                src={post.url}
                alt="Foto do animal para doação"
              />
              <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          </div>
        </Section>
      )}
    </Container>
  );
}

Post.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
