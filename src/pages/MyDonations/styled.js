import styled from 'styled-components';

export const Main = styled.main`
  p {
    margin: 0;
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

  a {
    color: #000;
    transition: all 300ms;

    &:hover {
      color: #6c757d;
    }
  }
`;
