import { Container, Frontier } from 'pages/Common.styled';
import { Section } from './OurServices.styled';
import { OptionHome } from 'components/ui/our-services/option/OptionHome';
import { BenefitsHome } from 'components/ui/our-services/benefits/BenefitsHome';
import { ElementsStationHome } from 'components/ui/our-services/elements-station/ElementsStationHome';
import { StepsWorkHome } from 'components/ui/our-services/steps-work/StepsWorkHome';
import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import { Consult } from '../../components/modals/consult/Сonsult';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/reused/call/Call';

const ForHome = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Section isGradient={true}>
        <Container>
          <OptionHome widthScreen={widthScreen} />
        </Container>
      </Section>
      <Section>
        <Container>
          <BenefitsHome />
        </Container>
      </Section>
      <Section paddBott={'0px'} paddTop={'0px'}>
        <Container>
          <ElementsStationHome />
        </Container>
      </Section>
      <Section overX={'hidden'} paddBott={'0px'}>
        <Container>
          <StepsWorkHome />
        </Container>
      </Section>
      <Frontier color={'main'}>
        <Consult widthScreen={widthScreen} />
      </Frontier>
      <Call />
    </GoogleAnalyticsWrapper>
  );
};

export default ForHome;
