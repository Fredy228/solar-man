import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  ButtonTab,
  InnerNav,
  SelectCustom,
  SortLabelWrap,
  WrapperSort,
  WrapperTab,
} from './StoreNav.styled';

const subtypeSolution = [
  { value: 'Зелений тариф', label: 'Зелений тариф' },
  { value: 'Автономні станції', label: 'Автономні станції' },
  { value: 'Резервне живлення', label: 'Резервне живлення' },
  {
    value: 'Модульні безперебійні системи',
    label: 'Модульні безперебійні системи',
  },
  { value: 'Для підприємств', label: 'Для підприємств' },
];

const subtypeGoods = [
  { value: 'Панелі', label: 'Панелі' },
  { value: 'Інвертори', label: 'Інвертори' },
  { value: 'Акумулятори', label: 'Акумулятори' },
  { value: 'Кріплення', label: 'Кріплення' },
  { value: 'Комлпектуючі', label: 'Комлпектуючі' },
  { value: 'Зарядні станції', label: 'Зарядні станції' },
];

export const StoreNav = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParams = searchParams.get('type');
  const subtypeParams = searchParams.get('subtype');
  const sortParams = searchParams.get('sort');

  const [type, setType] = useState(typeParams);

  const [subtype, setSubtype] = useState(
    subtypeParams || (type === 'Готові рішення' ? 'Зелений тариф' : 'Панелі')
  );
  const [sort, setSort] = useState(sortParams || 'none');

  const optionSort = subtype => {
    let sortList = [
      { value: 'none', label: 'За замовчуванням' },
      { value: 'cost-up', label: 'Від дешевих' },
      { value: 'cost-down', label: 'Від дорогих' },
    ];

    if (
      [
        'Зелений тариф',
        'Автономні станції',
        'Резервне живлення',
        'Модульні безперебійні системи',
        'Для підприємств',
      ].includes(subtype)
    ) {
      const addList = [
        { value: 'power-up', label: 'Від менш потужних' },
        { value: 'power-down', label: 'Від більш потужних' },
      ];
      sortList = [...sortList, ...addList];
    }

    if (['Панелі', 'Інвертори'].includes(subtype)) {
      const addList = [
        { value: 'c-power-up', label: 'Від менш потужних' },
        { value: 'c-power-down', label: 'Від більш потужних' },
      ];
      sortList = [...sortList, ...addList];
    }

    if (['Акумулятори'].includes(subtype)) {
      const addList = [
        { value: 'с-voltage-up', label: 'Від менш потужних' },
        { value: 'с-voltage-down', label: 'Від більш потужних' },
        { value: 'с-reservoir-up', label: 'Від менш ємких' },
        { value: 'с-reservoir-down', label: 'Від більш ємких' },
      ];
      sortList = [...sortList, ...addList];
    }

    return sortList;
  };

  const sortLabel = optionSort(subtype).find(i => i.value === sort).label;

  const handleType = e => {
    const value = e.target.textContent;
    setType(value);
    setSort('none');
    const letSubtype = value === 'Готові рішення' ? 'Зелений тариф' : 'Панелі';
    setSubtype(letSubtype);

    setSearchParams(prevSearchParams => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('subtype', letSubtype);
      newSearchParams.set('sort', 'none');
      newSearchParams.set('page', '1');
      newSearchParams.set('type', value);
      return newSearchParams;
    });
  };

  const handleSort = ({ value }) => {
    setSort(value);
    setSearchParams(prevSearchParams => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('sort', value);
      newSearchParams.set('page', '1');
      return newSearchParams;
    });
  };

  const handleSubtype = ({ value }) => {
    setSubtype(value);
    setSort('none');
    setSearchParams(prevSearchParams => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('sort', 'none');
      newSearchParams.set('page', '1');
      newSearchParams.set('subtype', value);
      return newSearchParams;
    });
  };

  useEffect(() => {
    setType(typeParams);
    if (typeParams === 'Готові рішення') setSubtype('Зелений тариф');
    if (typeParams === 'Компоненти') setSubtype('Панелі');
    setSort('none');
  }, [typeParams]);

  return (
    <InnerNav>
      <WrapperTab>
        <ButtonTab
          type={'button'}
          onClick={handleType}
          active={type === 'Готові рішення'}
        >
          Готові рішення
        </ButtonTab>
        <ButtonTab
          type={'button'}
          onClick={handleType}
          active={type === 'Компоненти'}
        >
          Компоненти
        </ButtonTab>
      </WrapperTab>
      <WrapperSort>
        <SortLabelWrap>
          Тип:
          <SelectCustom
            options={type === 'Готові рішення' ? subtypeSolution : subtypeGoods}
            value={{ value: subtype, label: subtype }}
            onChange={handleSubtype}
            isSearchable={false}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </SortLabelWrap>
        <SortLabelWrap>
          Сортування:
          <SelectCustom
            options={optionSort(subtype)}
            value={{ value: sort, label: sortLabel }}
            onChange={handleSort}
            isSearchable={false}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </SortLabelWrap>
      </WrapperSort>
    </InnerNav>
  );
};
