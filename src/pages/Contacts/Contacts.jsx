import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { Container, Frontier } from '../Common.styled';
import { Section } from '../OurServices/OurServices.styled';
import { OptionContacts } from '../../components/Option/OptionContacts';
import { ListContacts } from '../../components/ListContacts/ListContacts';
import useWindowWidth from '../../services/widthScreen';
import { ConsultForm } from '../../components/Сonsult/ConsultForm';

const Contacts = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Section isGradient={true}>
        <Container>
          <OptionContacts widthScreen={widthScreen} />
        </Container>
      </Section>
      <Section>
        <Container>
          <ListContacts />
        </Container>
      </Section>
      <Frontier color={'main'}>
        <ConsultForm widthScreen={widthScreen} />
      </Frontier>
    </GoogleAnalyticsWrapper>
  );
};

export default Contacts;
