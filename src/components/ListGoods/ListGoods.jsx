import { baseURL } from '../API/API';
import { Inner } from '../../adminPage/StoreDB/ListProduct/ListProduct.styled';
import {
  CostProduts,
  ImgProduts,
  ItemProduts,
  ListProduts,
  NotFoundText,
  TitleProduts,
  PowerSpan,
  ItemProdutsLink,
  WrapperImgProducts,
} from './ListTableProduct.styled';
import { LoadPage } from '../LoadSpiner/LoadPage';
import { numbersFormatCost } from '../../services/numbersFormatCost';
import { Icon } from '../Icon/Icon';

export const ListGoods = ({ products, type, isLoading }) => {
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
                >
                  <ItemProdutsLink
                    to={`${type ? 'set' : 'component'}?id=${item.id}`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <WrapperImgProducts>
                      <ImgProduts
                        src={`${baseURL}/${item.photo}`}
                        alt={item.title}
                      />
                    </WrapperImgProducts>
                    {type && <PowerSpan>{item.power}</PowerSpan>}
                    <TitleProduts>{item.title}</TitleProduts>
                    <CostProduts>
                      <Icon name="icon-cart-buy" />
                      {numbersFormatCost(item.cost)}$
                    </CostProduts>
                  </ItemProdutsLink>
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
