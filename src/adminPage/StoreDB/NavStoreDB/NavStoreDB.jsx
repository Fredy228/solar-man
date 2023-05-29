import {
  Button,
  Inner,
  ItemNav,
  ListNav,
  Option,
  Select,
  Text,
} from './NavStoreDB.styled';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const NavStoreDB = ({ isLoading }) => {
  const navigate = useNavigate();
  const [type, setType] = useState('solution');
  const [subtype, setSubtype] = useState('all');
  const [sort, setSort] = useState('none');
  const [, setSearchParams] = useSearchParams();

  const handleCreate = () => {
    navigate(`${type}`);
  };
  const handleType = e => {
    setType(e.target.value);
    setSubtype('Всі');
    setSearchParams(prevSearchParams => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('type', e.target.value);
      return newSearchParams;
    });
  };

  const handleSubtype = e => {
    setSort(e.target.value);
    setSearchParams(prevSearchParams => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('sort', e.target.value);
      return newSearchParams;
    });
  };

  const handleSort = e => {
    setSubtype(e.target.value);
    setSearchParams(prevSearchParams => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('subtype', e.target.value);
      return newSearchParams;
    });
  };

  useEffect(() => {
    setSearchParams({
      page: '1',
      type: 'Готові рішення',
      subtype: 'Всі',
      sort: 'none',
    });
  }, []);

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
          <Select
            name="type"
            value={type}
            onChange={handleType}
            disabled={isLoading}
          >
            <Option value="solution">Готові рішення</Option>
            <Option value="components">Компоненти</Option>
          </Select>
        </ItemNav>
        <ItemNav>
          <Text>Підтип:</Text>
          <Select
            name="subtype"
            value={subtype}
            onChange={handleSubtype}
            disabled={isLoading}
          >
            <Option value="Всі">Всі</Option>
            {type === 'solution' ? (
              <>
                <Option value="Зелений тариф">Зелений тариф</Option>
                <Option value="Автономні станції">Автономні станції</Option>
                <Option value="Резервне живлення">Резервне живлення</Option>
                <Option value="Модульні безперебійні системи">
                  Модульні безперебійні системи
                </Option>
                <Option value="Для підприємств">Для підприємств</Option>
              </>
            ) : (
              <>
                <Option value="Панелі">Панелі</Option>
                <Option value="Інвентори">Інвентори</Option>
                <Option value="Акумулятори">Акумулятори</Option>
                <Option value="Кріплення">Кріплення</Option>
                <Option value="Комлпектуючі">Комлпектуючі</Option>
                <Option value="Контролери заряду">Контролери заряду</Option>
              </>
            )}
          </Select>
        </ItemNav>
        <ItemNav>
          <Text>Сортування:</Text>
          <Select
            onChange={handleSubtype}
            value={sort}
            name="sort"
            disabled={isLoading}
          >
            <Option value="none">За замовчуванням</Option>
            <Option value="cost-up">Від дешевих</Option>
            <Option value="cost-down">Від дорогих</Option>
            <Option value="power-up">Від менш потужних</Option>
            <Option value="power-down">Від більш потужних</Option>
          </Select>
        </ItemNav>
      </ListNav>
    </Inner>
  );
};
