import styled from 'styled-components';
import School from '../assets/SchoolOfAthens.jpg';

export const GlobalWrapper = styled.div`
  background-image: url(${School});
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
`;
