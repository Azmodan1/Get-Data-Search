import React, { useState } from 'react';
import axios from 'axios';

import { ContainerContent, Wrapper } from './styled';
import { Input } from '../../ui/Components/Input/Input';
import Profile from '../../ui/Components/Profile/Profile';

const Main = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState({});
  const url = 'https://swapi.dev/api/people';

  const getData = async () => {
    const {
      data: { results },
    } = await axios.get(url);

    const filteredData = results.find(person => person.name === value);
    setData(filteredData);
    setValue('');
  };

  return (
    <Wrapper>
      <ContainerContent>
        <Input
          value={value}
          width='55%'
          onChange={e => setValue(e.target.value)}
          placeholder='Введите имя и нажмите Enter'
          onKeyPress={event => event.key === 'Enter' && getData()}
        />
        <Profile data={data} />
      </ContainerContent>
    </Wrapper>
  );
};

export default Main;
