import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Main = styled.main`
  p {
    margin: 0;
  }

  h1,
  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  a {
    color: #000;
    transition: all ease 300ms;
    text-decoration: none;

    &:hover {
      color: ${colors.primaryColor};
      filter: none;
    }
  }

  li {
    transition: all ease 300ms;

    &:hover {
      transform: scale(1.02);
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sticky {
    position: sticky;
    top: 80px;
  }
`;
