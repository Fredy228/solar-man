import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Inner } from './ListProduct.styled';
import {
  BoxBtnProducts,
  ButtonProducts,
  CostProduts,
  ImgProduts,
  ItemProduts,
  ItemProdutsLink,
  ListProduts,
  TitleProduts,
  WrapperImgProducts,
} from '../../../components/ui/store/list-goods/ListTableProduct.styled';
import { baseURL } from '../../../api/base.api';
import { Icon } from '../../../components/reused/icon/Icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShowModal, useStoreUser } from '../../../globalState/globalState';
import { Modal } from '../../../components/reused/modal/Modal';
import { DeleteWindow } from '../../../components/modals/delete-window/DeleteWindow';
import { numbersFormatCost } from '../../../services/numbersFormatCost';
import {
  deleteStoreComponent,
  deleteStoreSet,
  toggleSetsHome,
} from '../../../api/store.api';

export const ListProduct = ({ products, setProducts, type }) => {
  const {
    userData: { role },
  } = useStoreUser();
  const [isShowBtn, setIsShowBtn] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { isShowModal, toggleModal } = useShowModal();
  const [idGood, setIdGood] = useState('');

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
      toggleModal(false);
    } catch (err) {
      if (err.response.status === 401)
        return Notify.failure(
          'Неавторизовано, ваша сесія закінчилася або невірний токен'
        );
      Notify.failure(`Щось пішло не так, помилка: ${err.response.status}`);
    }
  };

  const toggleHomeSetsInOrder = async (id, isInHome) => {
    try {
      setIsLoading(true);
      await toggleSetsHome(id);

      setProducts(prev => {
        const newResult = prev.result.map(item => {
          if (item.id === id) {
            const parse = JSON.parse(item.home);
            parse.value = !isInHome;
            const stringify = JSON.stringify(parse);
            console.log(parse);
            return { ...item, home: stringify };
          } else {
            return item;
          }
        });

        return { result: newResult, count: prev.count };
      });

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
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
              {isShowBtn === item.id && role !== 'user' && (
                <BoxBtnProducts>
                  {type === 'Готові рішення' && (
                    <ButtonProducts
                      type={'button'}
                      onClick={() =>
                        toggleHomeSetsInOrder(
                          item.id,
                          JSON.parse(item.home).value
                        )
                      }
                      disabled={isLoading}
                    >
                      {JSON.parse(item.home).value ? (
                        <Icon name={'icon-home'} />
                      ) : (
                        <Icon name={'icon-plus'} />
                      )}
                    </ButtonProducts>
                  )}

                  <ButtonProducts
                    type={'button'}
                    onClick={() => {
                      toggleModal(true);
                      setIdGood(item.id);
                    }}
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
              <ItemProdutsLink
                to={`/store/${
                  type === 'Готові рішення' ? 'set' : 'component'
                }?id=${item.id}`}
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
                <TitleProduts>{item.title}</TitleProduts>
                <CostProduts>
                  <Icon name="icon-cart-buy" />
                  {numbersFormatCost(item.cost)}$
                </CostProduts>
              </ItemProdutsLink>
            </ItemProduts>
          ))}
        {isShowModal && (
          <Modal>
            <DeleteWindow fn={fnDeleteProd} id={idGood} />
          </Modal>
        )}
      </ListProduts>
    </Inner>
  );
};
