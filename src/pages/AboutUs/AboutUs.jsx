import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import { Container, Frontier } from '../Common.styled';
import { OptionAboutUs } from '../../components/ui/our-services/option/OptionAboutUs';
import { Section } from '../OurServices/OurServices.styled';
import useWindowWidth from '../../services/widthScreen';
import { OurMission } from '../../components/ui/about-us/our-mission/OurMission';
import { BenefitsAboutUs } from '../../components/ui/our-services/benefits/BenefitsAboutUs';
import { Team } from '../../components/ui/about-us/team/Team';
import { Consult } from '../../components/modals/consult/Сonsult';
import { ItIsSolarMan } from '../../components/ui/about-us/it-is-solarman/ItIsSolarMan';
import { Call } from '../../components/reused/call/Call';

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
