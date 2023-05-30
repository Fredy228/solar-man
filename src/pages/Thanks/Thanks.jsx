import ReactPixel from 'react-facebook-pixel';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { Container, Inner, Text } from './Thanks.styled';
import { Icon } from '../../components/Icon/Icon';
import { useEffect } from 'react';

const Thanks = () => {
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
          <Icon name="icon-thanks" />
          <Text>Дякуємо за звернення</Text>
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
