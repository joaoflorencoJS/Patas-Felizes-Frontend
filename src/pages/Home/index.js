import React from 'react';
import { Container } from './styled';
import LandingHomePageMain from '../../components/HomeSections/Main';
import LandingHomePageWhoWeAre from '../../components/HomeSections/WhoWeAre';
import LandingHomeThirdSectionHome from '../../components/HomeSections/ThirdSectionHome';

export default function Home() {
  return (
    <Container>
      <LandingHomePageMain />
      <LandingHomePageWhoWeAre />
      <LandingHomeThirdSectionHome />
    </Container>
  );
}
