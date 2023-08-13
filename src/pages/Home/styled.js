import styled from 'styled-components';
import * as colors from '../../config/colors';

export const SpanPrimaryColor = styled.span`
  color: ${colors.primaryColor};
  letter-spacing: 4px;
`;

export const SpanTerciaryColor = styled.span`
  color: ${colors.terciaryColor};
  letter-spacing: 4px;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

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

  button:focus,
  a:focus {
    outline: none;
  }

  p {
    text-align: end;
  }
`;

export const DivImg = styled.div`
  display: flex;
  gap: 20px;
`;

export const Img = styled.img`
  width: 150px;
  border-radius: 10px;
  border: 2px solid ${colors.terciaryColor};
`;
