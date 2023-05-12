import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { Container, Inner, Text } from './Thanks.styled';
import { Icon } from '../../components/Icon/Icon';

const Thanks = () => {
  return (
    <GoogleAnalyticsWrapper>
      <Container>
        <Inner>
          <Icon name="icon-thanks" />
          <Text>Дякуємо за звернення</Text>
        </Inner>
      </Container>
    </GoogleAnalyticsWrapper>
  );
};

export default Thanks;
