import React from 'react';
import { Link } from 'react-router-dom';
import { LuLogIn } from 'react-icons/lu';
import {
  DivImg,
  HomeContent,
  Img,
  LandingContainer,
  SpanPrimaryColor,
  SpanTerciaryColor,
} from './styled';
import homeCat from './imgs/homeCat150.webp';
import homeDog from './imgs/homeDog150.webp';

export default function LandingHomePageMain() {
  return (
    <LandingContainer className="jumbotron mb-0 rounded-0">
      <div className="row">
        <HomeContent className="col-md">
          <h1 className="d-flex flex-column align-items-center text-center mt-4">
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
            <Img src={homeCat} alt="" className="img-fluid" />
            <Img src={homeDog} alt="" className="img-fluid" />
          </DivImg>

          <p className="lead text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            atque repudiandae facere delectus at unde dolorum, veniam assumenda
            vel soluta labore facilis laboriosam? Delectus odit non expedita,
            illo culpa fuga.
          </p>
        </HomeContent>
      </div>
    </LandingContainer>
  );
}
