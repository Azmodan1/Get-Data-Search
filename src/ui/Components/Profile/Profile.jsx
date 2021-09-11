import React from 'react';
import { omit } from 'ramda';

import { Wrapper, DataContainer, Span } from './styled';

const Profile = ({ data }) => {
  const person = omit(
    [
      'homeworld',
      'films',
      'created',
      'edited',
      'url',
      'starships',
      'vehicles',
      'species',
    ],
    data
  );

  const dataToRender = Object.entries(person).map(([key, value]) => {
    const title = key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ');
    return {
      title,
      value,
    };
  });
  console.log(dataToRender);
  return (
    <Wrapper>
      {dataToRender.map((item, index) => (
        <DataContainer key={index}>
          {item.title}: <Span>{item.value} </Span>
        </DataContainer>
      ))}
    </Wrapper>
  );
};

export default Profile;
