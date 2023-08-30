import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Main = styled.main`
  background: linear-gradient();
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  width: 420px;
  gap: 10px;

  h2 {
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    gap: 25px;
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
    margin-left: -30px;
    margin-bottom: -70px;
  }
`;
