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
  SpanDesrip,
  WrapperDescrip,
  WrapperOptionEl,
  WrapperShemaItems,
} from './StoreByOne.styled';
import { numbersFormatCost } from '../../services/numbersFormatCost';
import { Icon } from '../../components/Icon/Icon';
import { useBasket, useShowModal } from '../../globalState/globalState';
import { Container, Frontier } from '../Common.styled';
import { SectionTitle } from '../../CommonStyle/SectionTitle.styled';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';
import { Consult } from '../../components/Сonsult/Сonsult';
import useWindowWidth from '../../services/widthScreen';
import { GoBackBtn } from '../../components/GoBackBtn/GoBackBtn';

const StoreByOne = () => {
  const widthScreen = useWindowWidth();
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
            <GoBackBtn />
            <IntroWrapper>
              <ImgProduct
                src={`${baseURL}/${product.photo}`}
                alt={product.title}
                width="500"
                height="500"
              />
              <NameBox>
                <SectionTitle text={'left'}>{product.title}</SectionTitle>
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
                  <Icon name="icon-cart-buy" />
                  {numbersFormatCost(product.cost)}$
                </CostProduct>
                <ButtonOrg
                  type={'button'}
                  onClick={() => clickGood(product.title)}
                >
                  <Icon name={'icon-phone'} /> Замовити
                </ButtonOrg>
              </NameBox>
            </IntroWrapper>
            <WrapperDescrip
              ref={descripRef}
              full={descripHight.value > 250}
              isOpen={descripHight.isOpen}
            >
              <SectionTitle>Опис товару</SectionTitle>
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
                  <OptionText isBold={true} isWhite={false} isCenter={false}>
                    {item.subtitle}
                  </OptionText>
                  <OptionList isWhite={false}>
                    {item.option.map((iOption, index) => (
                      <OptionItem key={index}>
                        <OptionText isWhite={false}>{iOption}</OptionText>
                      </OptionItem>
                    ))}
                  </OptionList>
                </ItemCharacter>
              ))}
            </ListCharacter>
            {typeProduct === 'set' && (
              <>
                <WrapperShemaItems>
                  <SectionTitle>Схема роботи СЕС</SectionTitle>
                  <ImgShema
                    src={`${baseURL}/${product.descripPhoto}`}
                    alt={'Схема роботи СЕС'}
                  />
                </WrapperShemaItems>
                <WrapperShemaItems>
                  <SectionTitle>Елементи СЕС</SectionTitle>
                  <ListCharacter>
                    {JSON.parse(product.components).map((item, index) => (
                      <ItemElement key={index}>
                        <ElementImage
                          src={`${baseURL}/${item.image}`}
                          alt={item.subtitle}
                        />
                        <WrapperOptionEl>
                          <OptionText isBold={true}>{item.subtitle}</OptionText>
                          <OptionList>
                            {item.option.map((iOption, indexOption) => (
                              <OptionItem key={indexOption}>
                                <OptionText>{iOption}</OptionText>
                              </OptionItem>
                            ))}
                          </OptionList>
                        </WrapperOptionEl>
                      </ItemElement>
                    ))}
                  </ListCharacter>
                </WrapperShemaItems>
              </>
            )}
          </InnerProduct>
        </Container>
      )}
      <Frontier color={'main'}>
        <Consult widthScreen={widthScreen} />
      </Frontier>
    </>
  );
};

export default StoreByOne;
