import styled from 'styled-components';
import * as colors from '../../../config/colors';
import bgMainPage from './imgs/bgMainPage.webp';

export const LandingContainer = styled.section`
  /* background: url(${bgMainPage}) no-repeat; */
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 5px solid #cdcdcd;

  position: sticky;
  top: 0;
  bottom: 200vh;
  z-index: 1000;

  > div {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    background-size: cover;
    background-position: center;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 360px) {
    h2 {
      flex-direction: column;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px;
    outline: none;
    transition: all 300ms;
    background: ${colors.primaryColor};
  }

  button {
    display: flex;
    gap: 10px;
    margin: 10px;
    outline: none;
    transition: all 300ms;
  }
`;

export const SpanPrimaryColor = styled.span`
  color: ${colors.primaryColor};
  letter-spacing: 4px;
`;

export const SpanTerciaryColor = styled.span`
  color: ${colors.terciaryColor};
  letter-spacing: 4px;
`;
