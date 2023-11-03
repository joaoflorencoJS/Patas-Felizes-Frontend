import styled from 'styled-components';

export const Section = styled.section`
  .card {
    max-width: 500px;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
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
`;
