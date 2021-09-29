import React, { useState } from 'react';
import axios from 'axios';
import { pick } from 'ramda';

import { ContainerContent, Header, Wrapper } from './styled';
import { Input } from '../../ui/Components/Input/Input';
import Character from '../../ui/Components/Character/Character';
import Select from '../../ui/Components/Select/Select';
import { Char } from 'interfaces/Char';

const Main: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [loading, isLoading] = useState<boolean>(false);
  const [data, setData] = useState<Char | null>(null);
  const url = 'https://swapi.dev/api/people';

  const getData = async () => {
    isLoading(true);
    const {
      data: { results },
    } = await axios.get(url);
    const filteredData = results.map((item: Char) =>
      pick(
        [
          'name',
          'height',
          'mass',
          'hair_color',
          'skin_color',
          'eye_color',
          'birth_year',
          'gender',
        ],
        item
      )
    );
    const Character = filteredData.find(
      (person: Char) => person.name.toLowerCase() === value.toLowerCase()
    );
    isLoading(false);
    setData(Character);
    setValue('');
  };

  return (
    <Wrapper>
      <ContainerContent>
        <Header>
          <Input
            value={value}
            width="55%"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            placeholder="Введите имя и нажмите Enter"
            onKeyPress={(e: React.KeyboardEvent) =>
              e.key === 'Enter' && getData()
            }
          />
          <Select setValue={setValue} />
        </Header>
        {loading ? <h2>Загрузка данных...</h2> : null} <Character data={data} />
      </ContainerContent>
    </Wrapper>
  );
};

export default Main;
