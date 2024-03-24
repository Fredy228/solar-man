import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

const GoogleAnalyticsWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    ReactPixel.init('6596133883766755');
    ReactPixel.pageView();
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    // Отправка события отслеживания страницы Google Analytics при каждом переходе на новую страницу
    window.gtag('config', 'G-XFN527HLQ5', {
      page_path: location.pathname,
    });
  }, [location]);

  return <>{children}</>;
};

export default GoogleAnalyticsWrapper;
