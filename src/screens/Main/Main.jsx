import React, { useState } from 'react';
import axios from 'axios';

import { ContainerContent, Header, Wrapper } from './styled';
import { Input } from '../../ui/Components/Input/Input';
import Character from '../../ui/Components/Character/Character';
import Select from './../../ui/Components/Select/Select';

const Main = () => {
  const [value, setValue] = useState('');
  const [loading, isLoading] = useState(false);
  const [data, setData] = useState({});
  const url = 'https://swapi.dev/api/people';

  const getData = async () => {
    isLoading(true);
    const {
      data: { results },
    } = await axios.get(url);
    const filteredData = results.find(
      person => person.name.toLowerCase() === value.toLowerCase()
    );
    isLoading(false);
    setData(filteredData);
    setValue('');
  };

  return (
    <Wrapper>
      <ContainerContent>
        <Header>
          <Input
            value={value}
            width='55%'
            onChange={e => setValue(e.target.value)}
            placeholder='Введите имя и нажмите Enter'
            onKeyPress={event => event.key === 'Enter' && getData()}
          />
          <Select setValue={setValue} />
        </Header>
        {loading ? <h2>Загрузка данных...</h2> : null} <Character data={data} />
      </ContainerContent>
    </Wrapper>
  );
};

export default Main;
