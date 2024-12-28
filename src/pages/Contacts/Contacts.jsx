import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import { Container, Frontier } from '../Common.styled';
import { Section } from '../OurServices/OurServices.styled';
import { OptionContacts } from '../../components/ui/our-services/option/OptionContacts';
import { ListContacts } from '../../components/ui/contacts/list-contacts/ListContacts';
import useWindowWidth from '../../services/widthScreen';
import { ConsultForm } from '../../components/modals/consult/ConsultForm';
import { Call } from '../../components/reused/call/Call';

const Contacts = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Section isGradient={true}>
        <Container>
          <OptionContacts widthScreen={widthScreen} />
        </Container>
      </Section>
      <Section paddBott={'0'}>
        <Container>
          <ListContacts />
        </Container>
      </Section>
      <Frontier color={'main'}>
        <ConsultForm widthScreen={widthScreen} />
      </Frontier>
      <Call />
    </GoogleAnalyticsWrapper>
  );
};

export default Contacts;
