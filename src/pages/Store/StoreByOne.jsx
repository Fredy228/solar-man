import { useEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  baseURL,
  getByIdStoreComponent,
  getByIdStoreSet,
} from '../../components/API/API';
import { LoadPage } from '../../components/LoadSpiner/LoadPage';
import {
  CostProduct,
  ElementImage,
  ImgProduct,
  ImgShema,
  InnerProduct,
  IntroWrapper,
  ItemCharacter,
  ItemElement,
  ListCharacter,
  NameBox,
  OptionItem,
  OptionList,
  OptionText,
  OptionTitle,
  SpanColor,
  SpanDesrip,
  TitleProduct,
  WrapperDescrip,
  WrapperShemaItems,
} from './StoreByOne.styled';
import { numbersFormatCost } from '../../services/numbersFormatCost';
import { Icon } from '../../components/Icon/Icon';
import { CostProduts } from '../../components/ListGoods/ListTableProduct.styled';
import { useBasket, useShowModal } from '../../globalState/globalState';
import { Container } from '../Common.styled';

const StoreByOne = () => {
  const { typeProduct } = useParams();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toggleModal, isShowModal } = useShowModal();
  const { setGood } = useBasket();
  const descripRef = useRef(null);
  const [descripHight, setDescripHight] = useState({ value: 0, isOpen: false });

  const clickGood = nameGood => {
    setGood(nameGood);
    toggleModal(true);
  };

  useEffect(() => {
    if (descripRef.current) {
      const height = descripRef.current.offsetHeight;
      setDescripHight(prevState => ({ ...prevState, value: height }));
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isShowModal) {
      setGood(null);
    }
  }, [isShowModal, setGood]);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!typeProduct || !searchParams) return;

      setIsLoading(true);
      let data = undefined;
      if (typeProduct === 'set') {
        data = await getByIdStoreSet(id);
      }
      if (typeProduct === 'component') {
        data = await getByIdStoreComponent(id);
      }
      setProduct(data ? data.result : null);
      setIsLoading(false);
    };

    fetchProduct().catch(err => console.log(err));
  }, [id, typeProduct, searchParams]);

  return (
    <>
      {isLoading ? (
        <LoadPage />
      ) : (
        <Container>
          <InnerProduct>
            <IntroWrapper>
              <ImgProduct
                src={`${baseURL}/${product.photo}`}
                alt={product.title}
                width="500"
                height="500"
              />
              <NameBox>
                <TitleProduct>{product.title}</TitleProduct>
                <CostProduct>
                  {typeProduct === 'component' ? 'Компонент:' : 'Тип:'}{' '}
                  {product.type}
                </CostProduct>
                {typeProduct === 'component' && (
                  <>
                    {JSON.parse(product.optionSort).subtype && (
                      <CostProduct>
                        Тип: {JSON.parse(product.optionSort).subtype}
                      </CostProduct>
                    )}
                    {JSON.parse(product.optionSort).material && (
                      <CostProduct>
                        Матеріал: {JSON.parse(product.optionSort).material}
                      </CostProduct>
                    )}
                  </>
                )}
                <CostProduct>
                  Ціна:{' '}
                  <SpanColor>{numbersFormatCost(product.cost)}$</SpanColor>
                </CostProduct>
                <CostProduts onClick={() => clickGood(product.title)}>
                  <Icon name="icon-cart-buy" />
                  Замовити
                </CostProduts>
              </NameBox>
            </IntroWrapper>
            <WrapperDescrip
              ref={descripRef}
              full={descripHight.value > 250}
              isOpen={descripHight.isOpen}
            >
              <OptionTitle>Опис товару</OptionTitle>
              <OptionText>{product.descripMain}</OptionText>
              {descripHight.value > 250 && !descripHight.isOpen && (
                <SpanDesrip
                  onClick={() =>
                    setDescripHight(prevState => ({
                      ...prevState,
                      isOpen: true,
                    }))
                  }
                >
                  Розгорнути
                </SpanDesrip>
              )}
            </WrapperDescrip>
            <ListCharacter>
              {JSON.parse(product.descripCharacter).map((item, index) => (
                <ItemCharacter key={index}>
                  <OptionText isBold={true} isWhite={true} isCenter={true}>
                    {item.subtitle}
                  </OptionText>
                  <OptionList isWhite={true}>
                    {item.option.map((iOption, index) => (
                      <OptionItem key={index}>
                        <OptionText isWhite={true}>{iOption}</OptionText>
                      </OptionItem>
                    ))}
                  </OptionList>
                </ItemCharacter>
              ))}
            </ListCharacter>
            {typeProduct === 'set' && (
              <>
                <WrapperShemaItems>
                  <OptionTitle>Схема роботи СЕС</OptionTitle>
                  <ImgShema
                    src={`${baseURL}/${product.descripPhoto}`}
                    alt={'Схема роботи СЕС'}
                  />
                </WrapperShemaItems>
                <WrapperShemaItems>
                  <OptionTitle>Елементи СЕС</OptionTitle>
                  <ListCharacter>
                    {JSON.parse(product.components).map((item, index) => (
                      <ItemElement key={index}>
                        <ElementImage
                          src={`${baseURL}/${item.image}`}
                          alt={item.subtitle}
                        />
                        <OptionText isBold={true} isCenter={true}>
                          {item.subtitle}
                        </OptionText>
                        <OptionList>
                          {item.option.map((iOption, indexOption) => (
                            <OptionItem key={indexOption}>
                              <OptionText>{iOption}</OptionText>
                            </OptionItem>
                          ))}
                        </OptionList>
                      </ItemElement>
                    ))}
                  </ListCharacter>
                </WrapperShemaItems>
              </>
            )}
          </InnerProduct>
        </Container>
      )}
    </>
  );
};

export default StoreByOne;
