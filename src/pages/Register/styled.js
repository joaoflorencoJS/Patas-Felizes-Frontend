import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  height: calc(var(--vh, 1vh) * 100 - 70px);
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
  gap: 25px;
  margin-bottom: -70px;

  img {
    min-width: 100px;
    max-width: 150px;
    /* margin-left: -100px; */
  }

  h2 {
    margin-bottom: 70px;
    text-align: center;
  }

  @media (max-width: 390px) {
    img {
      display: none;
    }

    margin-left: 0px;
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
      box-shadow: 0px 0px 10px ${colors.pink4};
    }
  }
`;
