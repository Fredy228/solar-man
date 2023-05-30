import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { fbq } from 'react-facebook-pixel';
import { Container, Inner, Text } from './Thanks.styled';
import { Icon } from '../../components/Icon/Icon';
import { useEffect } from 'react';

const Thanks = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );
    if (typeof fbq === 'function') {
      fbq('init', '727645149364780');
      fbq('track', 'PageView');
      fbq('track', 'Lead');
    }
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
