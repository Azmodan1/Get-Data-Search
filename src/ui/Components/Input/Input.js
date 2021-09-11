import styled from 'styled-components';

export const Input = styled.input`
  font-size: 20px;
  margin-top: 10px;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '20px'};
  border: solid black;
  background-color: lightgrey;
  border-radius: 9px;
  &:focus {
    outline: none;
    border-color: white;
  }
  &::placeholder {
    color: grey;
  }
`;
