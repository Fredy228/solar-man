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

export const ListGoods = ({ products, type, isLoading }) => {
  return (
    <Inner>
      <ListProduts>
        {products.result && !isLoading ? (
          products.result.length > 0 ? (
            products.result.map(item => (
              <ItemProduts
                key={item.id}
                flex={type ? ['2', '3', '4'] : ['2', '3', '3']}
              >
                <ImgProduts src={`${baseURL}/${item.photo}`} alt={item.title} />
                <TitleProduts>{item.title}</TitleProduts>
                <CostProduts>{numbersFormatCost(item.cost)}$</CostProduts>
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
  );
};
