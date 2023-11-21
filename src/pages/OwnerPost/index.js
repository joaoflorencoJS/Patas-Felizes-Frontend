import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { mask } from 'remask';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyles';
import { Section } from './styled';
import whenCreatedWas from '../../services/whenCreatedWas';
import * as actions from '../../store/modules/auth/actions';

export default function OwnerPost({ match }) {
  const { postId } = get(match, 'params', '');
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [ownerPost, setOwnerPost] = useState({});
  const [adopters, setAdopters] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`/adopters/${postId}`);

        if (!data.user) {
          setOwnerPost(data.ong);
          delete data.ong;
        } else {
          setOwnerPost(data.user);
          delete data.user;
        }

        data.created_at = whenCreatedWas(data.created_at);

        setPost(data);
        setAdopters(data.adopter);
      } catch (errors) {
        const error = get(
          errors,
          'response.data.errors',
          'Erro ao obter o post e seus dados.'
        );
        const status = get(errors, 'response.status', '');

        if (status === 401) {
          dispatch(actions.authFailure());
          toast.error('Token inválido. Faça login para continuar.');
        } else {
          toast.error(error);
        }
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Section className="row mt-2 container p-0 pl-lg-3 pr-lg-3">
        {post && (
          <div className="p-2 col-12 col-lg-6">
            <div className="card m-auto">
              <header className="card-header">
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
                            ? `/ong/${ownerPost.id}/minhas-doacoes`
                            : `/user/${ownerPost.id}/minhas-doacoes`
                        }
                      >
                        {ownerPost.name}
                      </Link>
                    </h4>
                    <p className="font-italic text-muted">{post.created_at}</p>
                  </div>
                </div>
              </header>
              <img
                src={post.url}
                alt="Foto do seu animal que está para doação"
                className="card-img-top"
              />
              <article className="card-body border-top">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-text">{post.content}</p>
              </article>
            </div>
          </div>
        )}
        {post &&
          (adopters.length > 0 ? (
            <div
              className="accordion col-12 col-lg-6 p-2"
              id="adopterAccordion"
            >
              {adopters.map((adopter, index) => (
                <div key={adopter.id} className="card m-auto">
                  <div className="card-header" id={`heading${index}`}>
                    <h5 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        {adopter.full_name}
                      </button>
                    </h5>
                  </div>

                  <div
                    className={`collapse${
                      adopters.length === 1 ? ` border-bottom` : ``
                    }`}
                    id={`collapse${index}`}
                    aria-labelledby={`heading${index}`}
                    data-parent="#adopterAccordion"
                  >
                    <div className="card-body">
                      <table className="table m-0">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th className="col">Dados</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Data de Nascimento</th>
                            <td>
                              {new Date(adopter.age).toLocaleDateString(
                                'pt-BR',
                                { timeZone: 'UTC' }
                              )}
                            </td>
                          </tr>
                          {adopter.cpf && (
                            <tr>
                              <th scope="row">Cpf</th>
                              <td>{mask(adopter.cpf, ['999.999.999-99'])}</td>
                            </tr>
                          )}
                          <tr>
                            <th scope="row">Cep</th>
                            <td>{mask(adopter.cep, ['99999-999'])}</td>
                          </tr>
                          <tr>
                            <th scope="row">Rua</th>
                            <td>{adopter.address_street}</td>
                          </tr>
                          <tr>
                            <th scope="row">Número</th>
                            <td>{adopter.address_number}</td>
                          </tr>
                          <tr>
                            <th scope="row">Bairro</th>
                            <td>{adopter.address_district}</td>
                          </tr>
                          <tr>
                            <th scope="row">Complemento</th>
                            <td>
                              {adopter.address_complement
                                ? adopter.address_complement
                                : '--'}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Cidade</th>
                            <td>{adopter.address_city}</td>
                          </tr>
                          <tr>
                            <th scope="row">Estado</th>
                            <td>{adopter.address_state}</td>
                          </tr>
                          <tr>
                            <th scope="row">Telefone</th>
                            <td>
                              {adopter.contact_phone
                                ? mask(adopter.contact_phone, [
                                    '(99) 99999-9999',
                                  ])
                                : '--'}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Email</th>
                            <td>
                              {adopter.contact_email
                                ? adopter.contact_email
                                : '--'}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-2 col-6">
              <h1 className="text-center">
                Não há adoções para este post ainda.
              </h1>
            </div>
          ))}
      </Section>
    </Container>
  );
}

OwnerPost.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
