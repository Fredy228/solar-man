import { Container, Frontier } from 'pages/Common.styled';
import { Section } from './OurServices.styled';
import { OptionInvestment } from 'components/ui/our-services/option/OptionInvestment';
import { BenefitsInvestment } from 'components/ui/our-services/benefits/BenefitsInvestment';
import { ElementsStationInvestment } from 'components/ui/our-services/elements-station/ElementsStationInvestment';
import { StepsWorkInvestment } from 'components/ui/our-services/steps-work/StepsWorkInvestment';
import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import { Consult } from '../../components/modals/consult/Сonsult';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/reused/call/Call';

const ForInvestment = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Section isGradient={true}>
        <Container>
          <OptionInvestment widthScreen={widthScreen} />
        </Container>
      </Section>
      <Section>
        <Container>
          <BenefitsInvestment />
        </Container>
      </Section>
      <Section paddBott={'0px'} paddTop={'0px'}>
        <Container>
          <ElementsStationInvestment />
        </Container>
      </Section>
      <Section overX={'hidden'} paddBott={'0px'}>
        <Container>
          <StepsWorkInvestment />
        </Container>
      </Section>
      <Frontier color={'main'}>
        <Consult widthScreen={widthScreen} />
      </Frontier>
      <Call />
    </GoogleAnalyticsWrapper>
  );
};

export default ForInvestment;
