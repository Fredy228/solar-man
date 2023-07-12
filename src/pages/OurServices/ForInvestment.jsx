import { Container, Frontier } from 'pages/Common.styled';
import { Section } from './OurServices.styled';
import { OptionInvestment } from 'components/Option/OptionInvestment';
import { BenefitsInvestment } from 'components/Benefits/BenefitsInvestment';
import { ElementsStationInvestment } from 'components/ElementsStation/ElementsStationInvestment';
import { StepsWorkInvestment } from 'components/StepsWork/StepsWorkInvestment';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { Consult } from '../../components/Сonsult/Сonsult';
import useWindowWidth from '../../services/widthScreen';

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
    </GoogleAnalyticsWrapper>
  );
};

export default ForInvestment;
