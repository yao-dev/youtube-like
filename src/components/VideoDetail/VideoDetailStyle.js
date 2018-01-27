import styled from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  padding: 10px;
  box-shadow: 0px 1px 3px #F1F1F1;
  margin: 20px 0px;

  & .videoTitle {
    font-weight: bold;
  }

  & .videoDescription {
    margin-top: 20px;
  }

  & .btn.downloadButton, & .btn.downloadButton.hover, & .btn.downloadButton.focus {
    background: #D43929;
    color: #FFF;
  }

  & .btn.downloadButton {
    outline: none;
  }
`;
