import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';
import { Section } from './styled';
import whenCreatedWas from '../../services/whenCreatedWas';
import AdoptForm from '../../components/AdoptForm';

export default function Post({ match }) {
  const id = get(match, 'params.id', '');
  const [post, setPost] = useState(null);
  const [ownerPost, setOwnerPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const MySwal = withReactContent(Swal);

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

        data.created_at = whenCreatedWas(data.created_at);

        setPost(data);

        console.log(data);
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

  const handleAdopt = async () => {
    MySwal.fire({
      html: <AdoptForm postId={post.id} isUser={!!ownerPost.cnpj} />,
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

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
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div>
                    <h4 className="m-0">
                      <Link
                        to={
                          post.ong_id
                            ? `/ong/${ownerPost.id}`
                            : `/user/${ownerPost.id}`
                        }
                      >
                        {ownerPost.name}
                      </Link>
                    </h4>
                    <p className="font-italic text-muted">{post.created_at}</p>
                  </div>
                  <div>
                    <button type="button" onClick={handleAdopt}>
                      Adotar
                    </button>
                  </div>
                </div>
              </div>
              <img
                className="card-img-top"
                src={post.url}
                alt="Foto do animal para doação"
              />
              <div className="card-body border-top">
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
