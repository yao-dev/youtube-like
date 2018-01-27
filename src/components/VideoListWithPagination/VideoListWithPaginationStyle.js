import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  & .previous, & .next {
    margin: 0px 5px;
  }
`;
