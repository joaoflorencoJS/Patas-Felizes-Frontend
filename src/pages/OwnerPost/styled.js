import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Section = styled.section`
  .card {
    max-width: 500px;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .btn-link {
    text-decoration: none;
    color: ${colors.primaryColor};
    filter: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0;
  }

  a {
    color: #000;
    transition: all 300ms;

    &:hover {
      color: #6c757d;
    }
  }

  td {
    word-break: break-word;
  }
`;
