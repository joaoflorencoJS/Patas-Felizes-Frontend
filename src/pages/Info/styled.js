import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Main = styled.main``;

export const Aside = styled.aside`
  a {
    color: ${colors.primaryColor};
    filter: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &:focus {
      outline: none;
    }
  }

  .link-outline-primary-color {
    color: ${colors.primaryColor};
    background-color: transparent;
    border: 1px solid ${colors.primaryColor};
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &:hover {
      color: #fff;
      background-color: ${colors.primaryColor};
      border-color: ${colors.primaryColor};
    }
  }

  ul {
    @media (min-width: 768px) {
      li + li {
        border-top: 1px solid ${colors.primaryColor};
      }
      flex-direction: column;
    }
  }

  .nav-link-top {
    @media (max-width: 767.98px) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top: none;
    }

    @media (min-width: 768px) {
      border-bottom-right-radius: 0;
      border-bottom: none;
    }
  }

  .nav-link-middle {
    border-radius: 0;
    border-top: none;

    @media (min-width: 768px) {
      border-top: none;
      border-bottom: none;
    }
  }

  .nav-link-bottom {
    @media (max-width: 767.98px) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
      border-right: none;
    }

    @media (min-width: 768px) {
      border-top-right-radius: 0;
      border-top: none;
    }
  }

  .nav-link.active {
    background: ${colors.primaryColor};
  }
`;

export const Article = styled.article`
  h2 {
    text-align: center;
    font-size: 2.5rem;
  }

  h3 {
    /* margin-left: 1rem; */
    font-size: 2rem;
  }

  h4 {
    font-style: italic;
  }

  p {
    text-align: justify;
  }

  ul {
    list-style: disc;
    margin-left: 1.5rem;
  }
`;
