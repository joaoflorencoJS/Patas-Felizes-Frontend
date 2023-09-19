import styled from 'styled-components';
import * as colors from '../../config/colors';

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
