import styled from 'styled-components';

export const StyledSelect = styled.select`
  font-size: 20px;
  margin-top: 10px;
  height: 35px;
  width: 40%;
  background-color: lightgrey;
  border-radius: 8px;
  border: solid black;
  &:focus {
    outline: none;
    border-color: white;
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
