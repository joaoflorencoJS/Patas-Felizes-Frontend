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
`;
