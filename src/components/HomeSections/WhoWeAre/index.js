import React from 'react';
import {
  LandingContainer,
  HomeContent,
  SpanPrimaryColor,
  SpanTerciaryColor,
} from './styled';

export default function LandingHomePageWhoWeAre() {
  return (
    <LandingContainer className="mb-0" id="whoWeAre">
      <div className="pt-5 pb-5">
        <div className="container">
          <HomeContent className="text-center lead">
            <h2 className="d-flex align-items-center display-4">
              <SpanPrimaryColor className="mr-3">QUEM</SpanPrimaryColor>
              <SpanTerciaryColor>SOMOS?</SpanTerciaryColor>
            </h2>

            <p>
              O nosso site é especializado e específico que contém informações
              sobre cachorros, gatos e demais animais.
            </p>

            <p>
              Nossa proposta é trazer informação e ajuda para a população do
              município de Novo Horizonte. Apresentamos soluções para denunciar
              o abandono de animais pela cidade e um esquema de adoção no
              próprio site, que pode ser utilizado por Ong&apos;s ou contas
              pessoais.
            </p>

            <p>
              Além do mais, mundo está cada vez mais digital, então nosso
              principal objetivo é trazer a tecnologia para nosso pequeno
              município, de uma forma acolhedora e que ajudará todos os
              habitantes, entre seres humanos e pet&apos;s.
            </p>
          </HomeContent>
        </div>
      </div>
    </LandingContainer>
  );
}
