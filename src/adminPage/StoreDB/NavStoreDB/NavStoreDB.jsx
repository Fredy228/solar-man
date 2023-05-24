import {
  Button,
  Inner,
  ItemNav,
  ListNav,
  Option,
  Select,
  Text,
} from './NavStoreDB.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavStoreDB = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('solution');
  const [subtype, setSubtype] = useState('all');

  const handleCreate = () => {
    navigate(`${type}`);
  };
  const handleType = e => {
    setType(e.target.value);
    setSubtype('all');
  };

  return (
    <Inner>
      <ListNav>
        <ItemNav>
          <Text>Новий товар:</Text>
          <Button type={'button'} onClick={handleCreate}>
            + Створити
          </Button>
        </ItemNav>
        <ItemNav>
          <Text>Тип:</Text>
          <Select name="type" value={type} onChange={handleType}>
            <Option value="solution">Готові рішення</Option>
            <Option value="components">Компоненти</Option>
          </Select>
        </ItemNav>
        <ItemNav>
          <Text>Підтип:</Text>
          <Select
            name="subtype"
            value={subtype}
            onChange={e => setSubtype(e.target.value)}
          >
            <Option value="all">Всі</Option>
            {type === 'solution' ? (
              <>
                <Option value="green">Зелений тариф</Option>
                <Option value="ofline">Автономні станції</Option>
                <Option value="backup">Резервне живлення</Option>
                <Option value="module">Модульні безперебійні системи</Option>
                <Option value="company">Для підприємств</Option>
              </>
            ) : (
              <>
                <Option value="panels">Панелі</Option>
                <Option value="inventors">Інвентори</Option>
                <Option value="batters">Акумулятори</Option>
                <Option value="mounts">Кріплення</Option>
                <Option value="components">Комлпектуючі</Option>
                <Option value="controlers">Контролери заряду</Option>
              </>
            )}
          </Select>
        </ItemNav>
        <ItemNav>
          <Text>Сортування:</Text>
          <Select>
            <Option value="default">За замовчуванням</Option>
            <Option value="fromCheap">Від дешевих</Option>
            <Option value="fromRich">Від дорогих</Option>
            <Option value="powerDown">Від менш потужних</Option>
            <Option value="powerUp">Від більш потужних</Option>
          </Select>
        </ItemNav>
      </ListNav>
    </Inner>
  );
};
