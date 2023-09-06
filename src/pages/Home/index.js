import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import {
  SpanPrimaryColor,
  SpanTerciaryColor,
  HomeContent,
  LandingContainer,
} from './styled';
import LandingHomePageMain from '../../components/HomeSections/Main';

export default function Home() {
  return (
    <Container>
      <LandingHomePageMain />
      <LandingContainer className="mb-0">
        <div className="row container">
          <HomeContent className="col-md">
            <h1 className="d-flex align-items-center display-4">
              <SpanPrimaryColor className="mr-3">QUEM</SpanPrimaryColor>
              <SpanTerciaryColor>SOMOS?</SpanTerciaryColor>
            </h1>

            <p className="lead text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              incidunt quibusdam provident maiores. Ex corrupti exercitationem
              ab asperiores, aspernatur harum consequatur voluptate architecto
              unde quasi aperiam fugiat magni et sunt praesentium quam adipisci
              repellat ea minus expedita, ratione provident ad, quos maiores?
              Voluptatibus est tempore architecto minus similique magni? Odit?
            </p>

            <p className="lead text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              doloremque error eaque maiores magni necessitatibus accusantium?
              Laborum, omnis ad, consequatur mollitia fugiat odit, quibusdam
              inventore corrupti dignissimos aperiam aspernatur eligendi
              recusandae iste possimus quos. Ex accusantium, impedit dolore
              esse, iusto ut et assumenda dicta in velit at nam fugit voluptate
              fugiat possimus. Neque sit numquam magni illo, magnam ab eligendi
              dignissimos voluptatibus nisi. Tenetur iste magnam praesentium ea,
              nihil, quidem nobis quibusdam maiores voluptatum nisi itaque
              ipsam, vero ut cumque dolore enim libero iusto unde ipsum ex
              voluptas? Fuga, obcaecati ex. Blanditiis quidem similique odio in
              id deserunt assumenda vero.
            </p>

            <p className="lead text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quis natus sit porro reiciendis, facilis quia eum
              maiores, repellendus ut recusandae sed ratione labore explicabo
              eius expedita ab autem debitis. Tempore sit illo possimus,
              deserunt sapiente voluptate repudiandae doloremque eum dolore
              alias omnis nobis assumenda, hic nihil suscipit, amet ut.
            </p>
          </HomeContent>
        </div>
      </LandingContainer>
    </Container>
  );
}
