import React from 'react';
import { Link } from 'react-router-dom';
import { LuLogIn } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import {
  DivImg,
  HomeContent,
  Img,
  LandingContainer,
  SpanPrimaryColor,
  SpanTerciaryColor,
} from './styled';
import homeCat from './imgs/homeCat250.webp';
import homeDog from './imgs/homeDog250.webp';

export default function LandingHomePageMain() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <LandingContainer className="jumbotron mb-0 rounded-0" id="main">
      <div className="row">
        <HomeContent className="col-md">
          <h1 className="d-flex flex-column align-items-center text-center mt-4">
            <SpanPrimaryColor>Patas Felizes</SpanPrimaryColor>
            <SpanTerciaryColor>Adoção e amor</SpanTerciaryColor>
          </h1>

          <Link to="/register" className="btn btn-lg">
            <LuLogIn size={24} />
            {isLoggedIn ? 'Adote um animal' : 'Faça seu cadastro'}
          </Link>
        </HomeContent>
        <HomeContent className="col-md p-2">
          <DivImg className="gap-20">
            <Img src={homeCat} alt="" className="img-fluid" />
            <Img src={homeDog} alt="" className="img-fluid" />
          </DivImg>

          <p className="lead text-justify">
            Patas felizes é um site voltado aos futuros ou atuais pais de
            pet&apos;s. Com uma página onde podem adotar um animalzinho. Uma
            onde pode fazer denúncias de maltratos e por último uma pagina com
            informações de como cuidar melhor do seu pet.
          </p>
        </HomeContent>
      </div>
    </LandingContainer>
  );
}
