import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #dca;
  width: 600px;
  height: 400px;
`;

export const ContainerContent = styled(Wrapper)`
  flex-direction: column;
  width: 90%;
  height: 90%;
  background-color: transparent;
`;
