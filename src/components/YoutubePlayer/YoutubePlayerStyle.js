import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  & button {
    position: absolute;
    width: 30px;
    height: 30px;
    top: -15px;
    right: -15px;
    border: 0px;
    border-radius: 50%;
    color: #FFF;
    background: #D43929;
    cursor: pointer;
    box-shadow: 0px 0px 2px black;
    outline: none;
  }
`;
