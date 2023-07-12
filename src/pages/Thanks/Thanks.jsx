import ReactPixel from 'react-facebook-pixel';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { Container, Image, Inner, Text } from './Thanks.styled';
import { Icon } from '../../components/Icon/Icon';
import { useEffect } from 'react';

import thankImg from '../../img/thanks.png';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';
import { useNavigate } from 'react-router-dom';

const Thanks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    ReactPixel.init('727645149364780');
    ReactPixel.pageView();
    ReactPixel.track('Lead');
  }, []);

  return (
    <GoogleAnalyticsWrapper>
      <Container>
        <Inner>
          <Image src={thankImg} alt={'Solar-panel'} />
          <Text>Дякуємо за звернення</Text>
          <ButtonOrg type={'button'} onClick={() => navigate('/')}>
            <Icon name={'icon-logo-v2'} /> Перейти на головну
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
    </GoogleAnalyticsWrapper>
  );
};

export default Thanks;
