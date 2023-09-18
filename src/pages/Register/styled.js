import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  min-height: calc(100vh - 70px);
  min-width: 300px;
  max-width: 650px;

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

export const Article = styled.article`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 25px; */
  margin-bottom: -70px;
  width: 100%;

  img {
    min-width: 100px;
    max-width: 150px;
    margin-left: -30px;
  }

  /* @media (max-width: 390px) {
    img {
      display: none;
    }

    margin-left: 0px;
  } */

  div {
    width: 100%;

    h2 {
      margin-bottom: 70px;
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: row;

      button {
        padding: 0;
        width: auto;
      }
    }
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
      box-shadow: 0px 0px 10px ${colors.pink4};
    }
  }
`;
