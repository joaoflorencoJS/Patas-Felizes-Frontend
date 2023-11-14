import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Section = styled.section`
  h5,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  a {
    color: ${colors.primaryColor};
  }

  .button-default {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: left;
    color: #000;
    border: 3px dashed ${colors.primaryColor};
    transition: all ease 300ms;

    .card {
      border: none;
    }

    &:hover {
      border: 3px solid ${colors.primaryColor};
      background: #eee;
    }
  }
`;
