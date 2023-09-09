import ReactPixel from 'react-facebook-pixel';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { Container, Image, Inner, Text } from './Thanks.styled';
import { useEffect } from 'react';

import thankImg from '../../img/thanks.webp';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';
import { useNavigate } from 'react-router-dom';
import { SectionTitle } from '../../CommonStyle/SectionTitle.styled';
import { Frontier } from '../Common.styled';
import useWindowWidth from '../../services/widthScreen';

const Thanks = () => {
  const navigate = useNavigate();
  const widthScreen = useWindowWidth();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    ReactPixel.init('727645149364780');
    ReactPixel.pageView();
    ReactPixel.track('Lead');
  }, []);

  return (
    <GoogleAnalyticsWrapper>
      <Frontier color={'grad'}>
        <Container>
          <Inner>
            <SectionTitle>Дякуємо!</SectionTitle>
            <Text>
              Найближчим часом ми {widthScreen < 768 && <br />} звʼяжемося з
              вами {widthScreen > 767 && <br />} і надамо{' '}
              {widthScreen < 768 && <br />} детальну інформацію
            </Text>
            <Image src={thankImg} alt={'Solar-panel'} />
            <ButtonOrg type={'button'} onClick={() => navigate('/')}>
              На головну
            </ButtonOrg>
          </Inner>
        </Container>

        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=727645149364780&ev=PageView&noscript=1"
          alt={''}
        />
      </Frontier>
    </GoogleAnalyticsWrapper>
  );
};

export default Thanks;
