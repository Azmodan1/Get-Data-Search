import styled from 'styled-components';

export const Input = styled.input`
  padding: 1%;
  font-size: 20px;
  margin-top: 10px;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '20px'};
  border: solid black;
  background-color: lightgrey;
  border-radius: 8px;
  &:focus {
    padding-left: 1%;
    color: white;
    outline: none;
    border-color: white;
    background-color: darkgray;
    &::placeholder {
      color: white;
    }
  }
  &::placeholder {
    text-align: center;
    color: grey;
  }
  @media (max-width: 535px) {
    font-size: 18px;
  }
  @media (max-width: 505px) {
    font-size: 16px;
  }
  @media (max-width: 448px) {
    font-size: 14px;
  }
  @media (max-width: 391px) {
    font-size: 9px;
  }
  @media (max-width: 365px) {
    font-size: 7px;
  }
`;
