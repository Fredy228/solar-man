import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Inner } from './ListProduct.styled';
import {
  BoxBtnProducts,
  ButtonProducts,
  CostProduts,
  ImgProduts,
  ItemProduts,
  ListProduts,
  TitleProduts,
} from '../../../components/ListGoods/ListTableProduct.styled';
import {
  baseURL,
  deleteStoreComponent,
  deleteStoreSet,
} from '../../../components/API/API';
import { Icon } from '../../../components/Icon/Icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ListProduct = ({ products, setProducts, type }) => {
  const [isShowBtn, setIsShowBtn] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fnDeleteProd = async id => {
    try {
      let data;

      if (type === 'Готові рішення') data = await deleteStoreSet(id);

      if (type === 'Компоненти') data = await deleteStoreComponent(id);

      if (!data) return setIsLoading(false);

      setProducts(prev => {
        const newResult = prev.result.filter(item => item.id !== data.result);
        return { result: newResult, count: prev.count - 1 };
      });
      Notify.success('Видалено');
    } catch (err) {
      if (err.response.status === 401)
        return Notify.failure(
          'Неавторизовано, ваша сесія закінчилася або невірний токен'
        );
      Notify.failure(`Щось пішло не так, помилка: ${err.response.status}`);
    }
  };

  return (
    <Inner>
      <ListProduts>
        {products.result &&
          products.result.map(item => (
            <ItemProduts
              key={item.id}
              flex={['3', '3', '4']}
              onMouseEnter={() => setIsShowBtn(item.id)}
              onMouseLeave={() => setIsShowBtn('')}
            >
              <ImgProduts src={`${baseURL}/${item.photo}`} alt={item.title} />
              <TitleProduts>{item.title}</TitleProduts>
              <CostProduts>{item.cost}$</CostProduts>
              {isShowBtn === item.id && (
                <BoxBtnProducts>
                  <ButtonProducts
                    type={'button'}
                    onClick={() => fnDeleteProd(item.id)}
                    disabled={isLoading}
                  >
                    <Icon name={'icon-delete'} />
                  </ButtonProducts>
                  <ButtonProducts
                    type={'button'}
                    onClick={() => navigate(`${type}?id-product=${item.id}`)}
                  >
                    <Icon name={'icon-pencil'} />
                  </ButtonProducts>
                </BoxBtnProducts>
              )}
            </ItemProduts>
          ))}
      </ListProduts>
    </Inner>
  );
};