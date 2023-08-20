import React from 'react';
import { LuLogIn } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import {
  Img,
  SpanPrimaryColor,
  SpanTerciaryColor,
  HomeContent,
  DivImg,
} from './styled';
import homeCat from './imgs/homeCat150.webp';
import homeDog from './imgs/homeDog150.webp';

export default function Home() {
  return (
    <Container className="jumbotron">
      <div className="row">
        <HomeContent className="col-md-6">
          <SpanPrimaryColor className="display-3">
            Patas Felizes
          </SpanPrimaryColor>
          <SpanTerciaryColor className="display-3">
            Adoção e amor
          </SpanTerciaryColor>

          <Link to="/register" className="btn btn-lg">
            <LuLogIn size={24} />
            Faça seu cadastro
          </Link>
        </HomeContent>
        <HomeContent className="col-md-6">
          <DivImg className="gap-20">
            <Img src={homeCat} alt="" />
            <Img src={homeDog} alt="" />
          </DivImg>

          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            atque repudiandae facere delectus at unde dolorum, veniam assumenda
            vel soluta labore facilis laboriosam? Delectus odit non expedita,
            illo culpa fuga.
          </p>
        </HomeContent>
      </div>
    </Container>
  );
}
