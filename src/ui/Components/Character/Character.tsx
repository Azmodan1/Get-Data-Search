import React from 'react';
import { isNil } from 'ramda';

import { Char } from 'interfaces/Char';
import { Wrapper, DataContainer, Span } from './styled';

const Character: React.FC<{ data: Char | null }> = ({ data }) => {
  const dataToRender = !isNil(data)
    ? Object.entries(data).map(([key, value]) => {
        const title =
          key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ');
        return {
          title,
          value,
        };
      })
    : null;

  return (
    <Wrapper>
      {!isNil(data) &&
        dataToRender!.map((item, index) => (
          <DataContainer key={index}>
            {item.title}: <Span>{item.value} </Span>
          </DataContainer>
        ))}
    </Wrapper>
  );
};

export default Character;
