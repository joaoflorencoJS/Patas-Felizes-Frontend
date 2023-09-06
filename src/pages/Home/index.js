import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import LandingHomePageMain from '../../components/HomeSections/Main';
import LandingHomePageWhoWeAre from '../../components/HomeSections/WhoWeAre';

export default function Home() {
  return (
    <Container>
      <LandingHomePageMain />
      <LandingHomePageWhoWeAre />
    </Container>
  );
}
