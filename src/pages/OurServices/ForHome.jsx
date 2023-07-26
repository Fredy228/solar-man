import { Container, Frontier } from 'pages/Common.styled';
import { Section } from './OurServices.styled';
import { OptionHome } from 'components/Option/OptionHome';
import { BenefitsHome } from 'components/Benefits/BenefitsHome';
import { ElementsStationHome } from 'components/ElementsStation/ElementsStationHome';
import { StepsWorkHome } from 'components/StepsWork/StepsWorkHome';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { Consult } from '../../components/Сonsult/Сonsult';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/Call/Call';

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
