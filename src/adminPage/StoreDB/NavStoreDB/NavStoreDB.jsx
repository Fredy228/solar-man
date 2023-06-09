import {
  Button,
  Inner,
  ItemNav,
  ListNav,
  Option,
  OrderBtn,
  Select,
  Text,
} from './NavStoreDB.styled';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStoreUser } from '../../../globalState/globalState';

export const NavStoreDB = ({ isLoading }) => {
  const {
    userData: { role },
  } = useStoreUser();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParams = searchParams.get('type');
  const subtypeParams = searchParams.get('subtype');
  const sortParams = searchParams.get('sort');

  const [type, setType] = useState(typeParams || 'Готові рішення');
  const [subtype, setSubtype] = useState(subtypeParams || 'Всі');
  const [sort, setSort] = useState(sortParams || 'none');

  const handleCreate = () => {
    navigate(`${type}`);
  };
  const handleType = e => {
    setType(e.target.value);
    setSubtype('Всі');

    setSearchParams(prevSearchParams => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('subtype', 'Всі');
      newSearchParams.set('sort', 'none');
      newSearchParams.set('page', '1');
      newSearchParams.set('type', e.target.value);
      return newSearchParams;
    });
  };

  const handleSort = e => {
    setSort(e.target.value);
    setSearchParams(prevSearchParams => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('sort', e.target.value);
      newSearchParams.set('page', '1');
      return newSearchParams;
    });
  };

  const handleSubtype = e => {
    setSubtype(e.target.value);
    setSort('none');
    setSearchParams(prevSearchParams => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('sort', 'none');
      newSearchParams.set('page', '1');
      newSearchParams.set('subtype', e.target.value);
      return newSearchParams;
    });
  };

  return (
    <>
      <OrderBtn
        type={'button'}
        disabled={role === 'user'}
        onClick={() => navigate(`home/order`)}
      >
        Home page
      </OrderBtn>
      <Inner>
        <ListNav>
          <ItemNav>
            <Button
              type={'button'}
              onClick={handleCreate}
              disabled={role === 'user'}
            >
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
              <Option value="Готові рішення">Готові рішення</Option>
              <Option value="Компоненти">Компоненти</Option>
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
              {type === 'Готові рішення' ? (
                <>
                  <Option value="Зелений тариф">Зелений тариф</Option>
                  <Option value="Автономні станції">Автономні станції</Option>
                  <Option value="Резервне живлення">Резервне живлення</Option>
                  <Option value="Гібридні безперебійні системи">
                    Гібридні безперебійні системи
                  </Option>
                  <Option value="Для підприємств">Для підприємств</Option>
                </>
              ) : (
                <>
                  <Option value="Панелі">Панелі</Option>
                  <Option value="Інвертори">Інвертори</Option>
                  <Option value="Акумулятори">Акумулятори</Option>
                  <Option value="Кріплення">Кріплення</Option>
                  <Option value="Комлпектуючі">Комлпектуючі</Option>
                  <Option value="Зарядні станції">Зарядні станції</Option>
                </>
              )}
            </Select>
          </ItemNav>
          <ItemNav>
            <Text>Сортування:</Text>
            <Select
              onChange={handleSort}
              value={sort}
              name="sort"
              disabled={isLoading}
            >
              <Option value="none">За замовчуванням</Option>
              <Option value="cost-up">Від дешевих</Option>
              <Option value="cost-down">Від дорогих</Option>
              {type === 'Готові рішення' && (
                <>
                  <Option value="power-up">Від менш потужних</Option>
                  <Option value="power-down">Від більш потужних</Option>
                </>
              )}

              {['Панелі', 'Інвертори'].includes(subtype) && (
                <>
                  <Option value="c-power-up">Від менш потужних-</Option>
                  <Option value="c-power-down">Від більш потужних-</Option>
                </>
              )}

              {['Акумулятори'].includes(subtype) && (
                <>
                  <Option value="с-voltage-up">Від менш потужних</Option>
                  <Option value="с-voltage-down">Від більш потужних</Option>
                  <Option value="с-reservoir-up">Від менш ємких</Option>
                  <Option value="с-reservoir-down">Від більш ємких</Option>
                </>
              )}
            </Select>
          </ItemNav>
        </ListNav>
      </Inner>
    </>
  );
};
