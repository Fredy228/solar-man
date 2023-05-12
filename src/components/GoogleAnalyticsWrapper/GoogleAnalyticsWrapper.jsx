import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalyticsWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Отправка события отслеживания страницы Google Analytics при каждом переходе на новую страницу
    window.gtag('config', 'G-XFN527HLQ5', {
      page_path: location.pathname,
    });
  }, [location]);

  return <>{children}</>;
};

export default GoogleAnalyticsWrapper;
