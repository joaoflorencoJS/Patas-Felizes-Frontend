import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  margin: 0 auto;
  min-width: 300px;
  max-width: 340px;
  margin-top: 70px;

  @media (max-width: 330px) {
    margin-top: 140px;

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

  label {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a {
    color: ${colors.linkColor};
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

  img {
    width: 150px;
  }
`;

export const LogoLink = styled(Link)`
  filter: none;

  &:hover {
    filter: none;
  }
`;
