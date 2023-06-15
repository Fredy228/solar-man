import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../API/API';
import { Inner } from '../../adminPage/StoreDB/ListProduct/ListProduct.styled';
import {
  CostProduts,
  ImgProduts,
  ItemProduts,
  ListProduts,
  NotFoundText,
  TitleProduts,
} from './ListTableProduct.styled';
import { LoadPage } from '../LoadSpiner/LoadPage';
import { numbersFormatCost } from '../../services/numbersFormatCost';
import { useBasket, useShowModal } from '../../globalState/globalState';
import { Icon } from '../Icon/Icon';

export const ListGoods = ({ products, type, isLoading }) => {
  const { toggleModal, isShowModal } = useShowModal();
  const { setGood } = useBasket();
  const navigate = useNavigate();

  const clickGood = nameGood => {
    setGood(nameGood);
    toggleModal(true);
  };

  useEffect(() => {
    if (!isShowModal) {
      setGood(null);
    }
  }, [isShowModal, setGood]);

  return (
    <>
      <Inner>
        <ListProduts>
          {products.result && !isLoading ? (
            products.result.length > 0 ? (
              products.result.map(item => (
                <ItemProduts
                  key={item.id}
                  flex={type ? ['2', '3', '4'] : ['2', '3', '3']}
                  onClick={e => {
                    if (e.target.tagName === 'BUTTON') return;
                    navigate(`${type ? 'set' : 'component'}?id=${item.id}`);
                  }}
                >
                  <ImgProduts
                    src={`${baseURL}/${item.photo}`}
                    alt={item.title}
                  />
                  <TitleProduts>{item.title}</TitleProduts>
                  <CostProduts onClick={() => clickGood(item.title)}>
                    <Icon name="icon-cart-buy" />
                    {numbersFormatCost(item.cost)}$
                  </CostProduts>
                </ItemProduts>
              ))
            ) : (
              <NotFoundText>{'Нічого не знайдено :)'}</NotFoundText>
            )
          ) : (
            <LoadPage />
          )}
        </ListProduts>
      </Inner>
    </>
  );
};
