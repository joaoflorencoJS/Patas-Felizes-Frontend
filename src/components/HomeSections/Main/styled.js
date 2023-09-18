import styled from 'styled-components';
import * as colors from '../../../config/colors';
import bgMainPage from './imgs/bgMainPage.webp';

export const LandingContainer = styled.section`
  min-height: calc(100vh - 70px);

  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${bgMainPage}) no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-height: 729.98px) and (min-width: 767.98px) {
    position: sticky;
    top: 70px;
    z-index: 998;
  }

  @media (max-width: 768px) {
    > div {
      gap: 28px;
    }
  }
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.6em;
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

export const DivImg = styled.div`
  display: flex;
  gap: 20px;
`;

export const Img = styled.img`
  min-width: 100px;
  border-radius: 10px;
  border: 2px solid ${colors.terciaryColor};
`;
