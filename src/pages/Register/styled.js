import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  min-width: 300px;
  max-width: 390px;
  gap: 10px;
  margin-top: 70px;

  h2 {
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    gap: 25px;
    margin-left: -30px;
    margin-bottom: -70px;

    img {
      min-width: 100px;
      max-width: 150px;
    }

    h2 {
      margin-bottom: 70px;
    }
  }

  @media (max-width: 390px) {
    img {
      display: none;
    }

    div {
      margin-left: 0px;
    }
  }

  @media (max-width: 330px) {
    margin-top: 140px;
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
`;
