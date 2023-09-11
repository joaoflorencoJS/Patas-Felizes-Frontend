import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import LandingHomePageMain from '../../components/HomeSections/Main';
import LandingHomePageWhoWeAre from '../../components/HomeSections/WhoWeAre';
import LandingHomePageWhoWeAre2 from '../../components/HomeSections/WhoWeAre copy';

export default function Home() {
  return (
    <Container>
      <LandingHomePageMain />
      <LandingHomePageWhoWeAre />
      <LandingHomePageWhoWeAre2 />
    </Container>
  );
}
