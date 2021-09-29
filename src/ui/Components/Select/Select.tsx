import React from 'react';
import { StyledSelect } from './styled';

const Select: React.FC<{ setValue: Function }> = ({ setValue }) => (
  <StyledSelect
    placeholder="Выберите Персонажа"
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
      setValue(e.target.value)
    }
    defaultValue="Список персонажей"
  >
    <option disabled value="Список персонажей">
      Список персонажей
    </option>
    <option value="Luke Skywalker">Luke Skywalker</option>
    <option value="C-3PO">C-3PO</option>
    <option value="R2-D2">R2-D2</option>
    <option value="Darth Vader">Darth Vader</option>
    <option value="Leia Organa">Leia Organa</option>
    <option value="Owen Lars">Owen Lars</option>
    <option value="Beru Whitesun lars">Beru Whitesun lars</option>
    <option value="R5-D4">R5-D4</option>
    <option value="Biggs Darklighter">Biggs Darklighter</option>
    <option value="Obi-Wan Kenobi">Obi-Wan Kenobi</option>
  </StyledSelect>
);

export default Select;
