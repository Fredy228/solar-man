import {
  BuyBtn,
  Img,
  PowerSpan,
  SolutionInner,
  SolutionItem,
  SolutionList,
  TitleLink,
} from './Solution.styled';
import { SectionTitle } from '../../CommonStyle/SectionTitle.styled';
import { useEffect, useRef, useState } from 'react';
import { baseURL, getSetsHomeOrder } from '../API/API';
import { Icon } from '../Icon/Icon';
import { numbersFormatCost } from '../../services/numbersFormatCost';
import { LoadPage } from '../LoadSpiner/LoadPage';
import {
  ButtonOrg,
  ButtonVariantTwo,
} from '../../CommonStyle/ButtonCommon.styled';
import { useBasket, useShowModal } from '../../globalState/globalState';

export const Vitrina = ({ lang }) => {
  const limit = 8;
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [isError, setIsError] = useState(false);
  const isFirst = useRef(false);

  const { toggleModal } = useShowModal();
  const { setGood } = useBasket();

  const isShowMore = page < total / limit;

  const clickGood = nameGood => {
    setGood(nameGood);
    toggleModal(true);
  };

  useEffect(() => {
    if (isFirst.current) return;
    isFirst.current = true;

    getSetsHomeOrder({ page, limit })
      .then(data => {
        setItems(prevState => [...prevState, ...data.result]);
        setTotal(data.total);
        console.log(data);
      })
      .catch(e => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  return (
    <SolutionInner>
      <SectionTitle marginBottom={'40px'}>
        {lang === 'uk' ? 'Вітрина' : 'Витрина'}
      </SectionTitle>
      <SolutionList>
        {isLoading ? (
          <LoadPage />
        ) : (
          <>
            {isError
              ? 'Error getting goods'
              : items.map(item => (
                  <SolutionItem key={item.id}>
                    <Img
                      src={`${baseURL}/${item.photo}`}
                      loading="lazy"
                      width="500"
                      height="500"
                      alt={item.title}
                    />
                    <PowerSpan>{item.power}</PowerSpan>
                    <TitleLink to={`/store/set?id=${item.id}`}>
                      {item.title}
                    </TitleLink>
                    <BuyBtn>
                      <Icon name="icon-cart-buy" />
                      {numbersFormatCost(item.cost)}$
                    </BuyBtn>
                    <ButtonOrg
                      type={'button'}
                      onClick={() => clickGood(item.title)}
                    >
                      {lang === 'uk' ? 'Купити' : 'Купить'}
                    </ButtonOrg>
                  </SolutionItem>
                ))}
          </>
        )}
      </SolutionList>
      {isShowMore && (
        <ButtonVariantTwo
          disabled={isLoading}
          type={'button'}
          style={{ margin: '20px auto 0 auto' }}
          onClick={() => {
            isFirst.current = false;
            setPage(prevState => prevState + 1);
          }}
        >
          {isLoading ? (
            <>{lang === 'uk' ? 'Завантаження...' : 'Загрузка...'}</>
          ) : (
            <>{lang === 'uk' ? 'Показати ще' : 'Показать еще'}</>
          )}
        </ButtonVariantTwo>
      )}
    </SolutionInner>
  );
};
