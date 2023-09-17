import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  background: ${colors.primaryColor};
  color: #fff;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a,
  .navbar-brand {
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .navbar-brand {
    @media (max-width: 400px) {
      font-size: 1em;
    }
  }

  .navbar-collapse {
    transition: all 300ms;
  }

  .navbar-toggler {
    /* border: 1px solid #cdcdcd; */
    transition: all 300ms;

    &:focus {
      outline: none;
    }
  }
`;
