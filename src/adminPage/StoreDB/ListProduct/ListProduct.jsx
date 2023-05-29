import { Inner } from './ListProduct.styled';
import {
  CostProduts,
  ImgProduts,
  ItemProduts,
  ListProduts,
  TitleProduts,
} from '../../../components/ListGoods/ListTableProduct.styled';
import { baseURL } from '../../../components/API/API';

export const ListProduct = ({ result }) => {
  return (
    <Inner>
      <ListProduts>
        {result &&
          result.map(item => (
            <ItemProduts key={item.id} flex={['3', '3', '4']}>
              <ImgProduts src={`${baseURL}/${item.photo}`} alt={item.title} />
              <TitleProduts>{item.title}</TitleProduts>
              <CostProduts>{item.cost}$</CostProduts>
            </ItemProduts>
          ))}
      </ListProduts>
    </Inner>
  );
};
