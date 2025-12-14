import { Frontier } from 'pages/Common.styled';
import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import { SendPhone } from '../../components/modals/send-phone/SendPhone';
// import { Consult } from '../../components/modals/consult/Сonsult';
import useWindowWidth from '../../services/widthScreen';

const ProvideContact = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Frontier color={'grad'}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '0 10px',
            height: 'calc(100vh - 100px)',
            minHeight: '500px',
            alignItems: 'center',
          }}
        >
          <SendPhone />
        </div>
      </Frontier>
    </GoogleAnalyticsWrapper>
  );
};

export default ProvideContact;
