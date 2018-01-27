import styled from 'styled-components';

export const Container = styled.li`
  width: 200px;
  list-style: none;
  cursor: pointer;
  flex-flow: row wrap;
  text-align: center;
  background: #FFF;
  margin: 0 10px 20px 10px;
  box-shadow: 0px 0px 2px 0px #d6d4d4;

  &:hover {
    background: #D43929;
    color: #FFF;
  }

  & img {
    width: 100%;
  }

  & p {
    margin: 10px 0px;
    padding: 10px;
  }
`;
