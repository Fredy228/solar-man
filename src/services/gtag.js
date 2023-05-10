export const gtag_report_conversion = url => {
  const callback = () => {
    if (typeof url !== 'undefined') {
      window.location = url;
    }
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'conversion',
    send_to: 'AW-11172723474/bgPXCLyV_J0YEJL2yM8p',
    event_callback: callback,
  });

  return false;
};
