import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  height: calc(var(--vh, 1vh) * 100 - 70px);
  min-width: 300px;
  max-width: 390px;

  @media (max-width: 330px) {
    h2 {
      font-size: 1.8em;
    }

    img {
      display: none;
    }
  }

  .card {
    width: 100%;

    p {
      margin: 0;
    }
  }

  a {
    color: ${colors.linkColor};
  }
`;

export const LogoLink = styled(Link)`
  filter: none;

  &:hover {
    filter: none;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  img {
    width: 150px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 100%;
  }

  input {
    padding: 0 10px;
    font-size: 1.1em;
    border: 1px solid #ddd;
    border-radius: 5px;

    &:focus {
      border: 1px solid ${colors.pink4};
    }
  }
`;
