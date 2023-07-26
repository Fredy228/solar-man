import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { Container, Frontier } from '../Common.styled';
import { OptionAboutUs } from '../../components/Option/OptionAboutUs';
import { Section } from '../OurServices/OurServices.styled';
import useWindowWidth from '../../services/widthScreen';
import { OurMission } from '../../components/OurMission/OurMission';
import { BenefitsAboutUs } from '../../components/Benefits/BenefitsAboutUs';
import { Team } from '../../components/Team/Team';
import { Consult } from '../../components/Сonsult/Сonsult';
import { ItIsSolarMan } from '../../components/ItIsSolarMan/ItIsSolarMan';
import { Call } from '../../components/Call/Call';

const AboutUs = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Section isGradient={true}>
        <Container>
          <OptionAboutUs />
        </Container>
      </Section>
      <Section paddBott={'0'}>
        <Container>
          <OurMission widthScreen={widthScreen} />
        </Container>
      </Section>
      <Section>
        <Container>
          <BenefitsAboutUs />
        </Container>
      </Section>
      <Section paddTop={'0'} paddBott={'0'}>
        <Frontier color={'main'}>
          <Container>
            <Team />
          </Container>
        </Frontier>
      </Section>
      <Section>
        <Container>
          <ItIsSolarMan />
        </Container>
      </Section>
      <Frontier color={'main'}>
        <Consult widthScreen={widthScreen} />
      </Frontier>
      <Call />
    </GoogleAnalyticsWrapper>
  );
};

export default AboutUs;
