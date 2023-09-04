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
  LandingContainer,
} from './styled';
import homeCat from './imgs/homeCat150.webp';
import homeDog from './imgs/homeDog150.webp';

export default function Home() {
  return (
    <Container>
      <LandingContainer className="jumbotron mb-0">
        <div className="row">
          <HomeContent className="col-md">
            <h1 className="d-flex flex-column align-items-center display-3">
              <SpanPrimaryColor>Patas Felizes</SpanPrimaryColor>
              <SpanTerciaryColor>Adoção e amor</SpanTerciaryColor>
            </h1>

            <Link to="/register" className="btn btn-lg">
              <LuLogIn size={24} />
              Faça seu cadastro
            </Link>
          </HomeContent>
          <HomeContent className="col-md">
            <DivImg className="gap-20">
              <Img src={homeCat} alt="" className="" />
              <Img src={homeDog} alt="" className="img-fluid" />
            </DivImg>

            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate atque repudiandae facere delectus at unde dolorum,
              veniam assumenda vel soluta labore facilis laboriosam? Delectus
              odit non expedita, illo culpa fuga.
            </p>
          </HomeContent>
        </div>
      </LandingContainer>
      <LandingContainer className="mb-0">
        <div className="row container">
          <HomeContent className="col-md">
            <h1 className="d-flex align-items-center display-4">
              <SpanPrimaryColor className="mr-3">QUEM</SpanPrimaryColor>
              <SpanTerciaryColor>SOMOS?</SpanTerciaryColor>
            </h1>

            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              voluptate exercitationem autem incidunt qui praesentium
              reprehenderit accusantium explicabo temporibus? Voluptates
              repellat sint quis minus inventore sit at reiciendis, nostrum nam.
            </p>
          </HomeContent>
        </div>
      </LandingContainer>
    </Container>
  );
}
