import {
  BackDropFilter,
  FilterToggle,
  Inner,
  WrapperFilter,
  WrapperStore,
} from './Store.styled';
import { Filter } from '../../components/ui/store/filter/Filter';
import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import { StoreNav } from '../../components/ui/store/store-nav/StoreNav';
import { ListGoods } from '../../components/ui/store/list-goods/ListGoods';
import Pagination from '../../components/reused/pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Frontier } from '../Common.styled';
import { Icon } from '../../components/reused/icon/Icon';
import { Consult } from '../../components/modals/consult/Сonsult';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/reused/call/Call';
import {
  getFilterStoreComponent,
  getStoreComponents,
  getStoreSets,
} from '../../api/store.api';

const initialFilter = {
  brand: [],
  country: [],
  subtype: [],
  power: [],
  material: [],
  reservoir: [],
  voltage: [],
  phases: [],
};

const Store = () => {
  const widthScreen = useWindowWidth();
  const limit = 12;
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParams = searchParams.get('page');
  const typeParams = searchParams.get('type');
  const subtypeParams = searchParams.get('subtype');
  const sortParams = searchParams.get('sort');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterList, setFilterList] = useState({});
  const [selectedValues, setSelectedValues] = useState(initialFilter);
  const [isShowFilter, setIsShowFilter] = useState(false);

  const handleCheckboxChange = (e, filter) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedValues(prevValues => ({
        ...prevValues,
        [filter]: [...prevValues[filter], value],
      }));
    } else {
      setSelectedValues(prevValues => ({
        ...prevValues,
        [filter]: prevValues[filter].filter(item => item !== value),
      }));
    }
  };

  useEffect(() => {
    setSearchParams(prevSearchParams => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('page', '1');
      return newSearchParams;
    });
  }, [selectedValues, setSearchParams]);

  useEffect(() => {
    if (isShowFilter) document.body.classList.add('no-scroll');
    if (!isShowFilter) document.body.classList.remove('no-scroll');
  }, [isShowFilter]);

  useEffect(() => {
    setSearchParams(prevSearchParams => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      if (!pageParams) newSearchParams.set('page', '1');
      if (!typeParams) newSearchParams.set('type', 'Компоненти');
      return newSearchParams;
    });
  }, [typeParams, pageParams, setSearchParams]);

  useEffect(() => {
    setSelectedValues(initialFilter);
  }, [typeParams, subtypeParams]);

  useEffect(() => {
    const type = typeParams || 'Компоненти';
    const subtype =
      subtypeParams || (type === 'Готові рішення' ? 'Зелений тариф' : 'Панелі');

    const fetchProducts = async () => {
      setIsLoading(true);
      const page = Number(pageParams) || 1;

      const sort = sortParams || 'none';

      if (!type || !page || !subtype || !sort) return setIsLoading(false);

      try {
        let data;

        if (type === 'Готові рішення')
          data = await getStoreSets(page, limit, subtype, sort);

        if (type === 'Компоненти')
          data = await getStoreComponents(
            page,
            limit,
            subtype,
            sort,
            selectedValues
          );

        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setProducts([]);
        setIsLoading(false);
      }

      setIsLoading(false);
    };

    const getFilter = async () => {
      const data = await getFilterStoreComponent(subtype);
      setFilterList(data);
    };

    fetchProducts().catch(err => console.log(err));
    getFilter().catch(err => console.log(err));
  }, [pageParams, typeParams, sortParams, subtypeParams, selectedValues]);

  return (
    <GoogleAnalyticsWrapper>
      <Container>
        <Inner>
          <WrapperFilter
            isShow={
              typeParams === 'Компоненти' && Object.keys(filterList).length > 0
            }
            isShowFilter={isShowFilter}
          >
            <Filter
              filterList={filterList}
              isShow={
                typeParams === 'Компоненти' &&
                Object.keys(filterList).length > 0
              }
              handleCheckboxChange={handleCheckboxChange}
              count={products.count}
              isLoading={isLoading}
              setCheck={setSelectedValues}
              initialFilter={initialFilter}
              subtypeParams={subtypeParams}
            />
            {typeParams === 'Компоненти' &&
              Object.keys(filterList).length > 0 && (
                <FilterToggle
                  type={'button'}
                  onClick={() => setIsShowFilter(prev => !prev)}
                  isShowFilter={isShowFilter}
                >
                  {!isShowFilter ? (
                    <Icon name={'icon-filter'} />
                  ) : (
                    <Icon name={'icon-cancel'} />
                  )}
                </FilterToggle>
              )}
          </WrapperFilter>
          <BackDropFilter
            isShowFilter={isShowFilter}
            onClick={() => setIsShowFilter(false)}
          ></BackDropFilter>
          <WrapperStore>
            <StoreNav isLoading={isLoading} />
            <ListGoods
              products={products}
              isLoading={isLoading}
              type={typeParams === 'Готові рішення'}
            />
            {products.count / limit > 1 && (
              <Pagination limit={limit} count={products.count} />
            )}
          </WrapperStore>
        </Inner>
      </Container>
      <Frontier color={'main'}>
        <Consult widthScreen={widthScreen} />
      </Frontier>
      <Call />
    </GoogleAnalyticsWrapper>
  );
};

export default Store;
