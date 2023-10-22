import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import PostForm from '../../components/PostForm';
import { Section } from './styled';

export default function Adoption() {
  const [postsWithURL, setPostsWithURL] = useState([]);
  const [postsWithoutURL, setPostsWithoutURL] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get('/posts');
        const arrayPostsWithURL = [];
        const arrayPostsWithoutURL = [];

        data.forEach((post) => {
          if (!post.url) {
            arrayPostsWithoutURL.push(post);
          } else {
            arrayPostsWithURL.push(post);
          }
        });

        setPostsWithURL(arrayPostsWithURL);
        setPostsWithoutURL(arrayPostsWithoutURL);

        console.log(postsWithURL);
      } catch (error) {
        toast.error('Erro ao carregar os posts.');
      }
      setIsLoading(false);
    })();
  }, []);

  const handleCreatePost = async () => {
    MySwal.fire({
      html: <PostForm MySwal={MySwal} />,
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <div>
        <h1>Adoção</h1>
        <button type="button" onClick={handleCreatePost}>
          Criar postagem
        </button>
      </div>
      <h1>posts</h1>
      <Section className="container">
        <div className="row">
          <div className="col-sm col-md-6 col-lg-9">
            <div className="row">
              {postsWithURL.map((post) => (
                <div key={post.id} className="col-md-6 col-lg-4 p-2">
                  <div className="card">
                    <img className="card-img-top" src={post.url} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p>{post.content}</p>
                      <Link to={`/post/${post.id}/show`}>Ver mais</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm col-md-6 col-lg-3">
            {postsWithoutURL.map((post) => (
              <div key={post.id} className="col-lg p-2">
                <div className="card">
                  <img className="card-img-top" src={post.url} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p>{post.content}</p>
                    <Link to={`/post/${post.id}/show`}>Ver mais</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Container>
  );
}
