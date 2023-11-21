import React from 'react';
import {
  LandingContainer,
  HomeContent,
  SpanPrimaryColor,
  SpanTerciaryColor,
} from './styled';

export default function LandingHomePageWhoWeAre() {
  return (
    <LandingContainer className="mb-0" id="whoWeAre1">
      <div className="pt-5 pb-5">
        <div className="container">
          <HomeContent className="text-center lead">
            <article className="row">
              <div className="col-12 col-lg-8 p-2 p-lg-4 m-auto">
                <h2 className="d-flex align-items-center flex-column display-4">
                  <SpanPrimaryColor className="mr-3">
                    ENCONTRE ANIMAIS
                  </SpanPrimaryColor>
                  <SpanTerciaryColor>PARA DOAÇÃO</SpanTerciaryColor>
                </h2>

                <p>
                  Navegue por um feed de publicações dedicadas a animais que
                  estão sendo doados, entre em contato com os doadores e adote.
                </p>
              </div>

              <div className="col-12 col-lg-6 p-2 p-lg-4">
                <h2 className="d-flex align-items-center flex-column display-4">
                  <SpanPrimaryColor className="mr-3">
                    PRATICIDADE
                  </SpanPrimaryColor>
                  <SpanTerciaryColor>NA DOAÇÃO</SpanTerciaryColor>
                </h2>

                <p>
                  Para quem pretende encontrar um novo lar para um animalzinho,
                  basta a realização de um cadastro onde serão solicitadas
                  informações importantes e a publicação já aparecerá no feed de
                  animais disponíveis para doação.
                </p>
              </div>
              <div className="col-12 col-lg-6 p-2 p-lg-4">
                <h2 className="d-flex align-items-center flex-column display-4">
                  <SpanPrimaryColor className="mr-3">MEIOS</SpanPrimaryColor>
                  <SpanTerciaryColor>DE DENÚNCIA</SpanTerciaryColor>
                </h2>
                <p>
                  Maus tratos infelizmente ainda acontecem com frequência no
                  Brasil, e nem todos sabem as formas corretas de denunciar. Há
                  uma página dedicada a informações sobre os meios de denúncia
                  para casos de maus tratos e abandono, para que esse
                  procedimento seja realizado da melhor forma.
                </p>
              </div>
            </article>
          </HomeContent>
        </div>
      </div>
    </LandingContainer>
  );
}
