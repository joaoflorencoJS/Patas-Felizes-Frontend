import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

html, body, #root {
  /* height: 100%; */
}

body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: ${colors.primaryDarkColor};
}

#root {
  display:flex;
  flex-direction: column;
}

button {
  cursor: pointer;
  outline: none;
  background: ${colors.primaryColor};
  font-size: 1em;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  transition: all 300ms;
}

a {
  text-decoration: none;
  color: #fff;
}

button, a {
  transition: all 300ms;
}

button:hover, a:hover {
  filter: brightness(75%);
  color: #fff;
}


button:focus, a:focus {
  filter: none;
  outline: none;
}

ul {
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.successColor};
}
body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
}
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
