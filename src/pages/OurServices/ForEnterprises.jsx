import { Container, Frontier } from 'pages/Common.styled';
import { Section } from './OurServices.styled';
import { OptionEnterprises } from 'components/Option/OptionEnterprises';
import { BenefitsEnterprises } from 'components/Benefits/BenefitsEnterprises';
import { Areas } from 'components/Areas/Areas';
import { ElementsStationEnterprises } from 'components/ElementsStation/ElementsStationEnterprise';
import { StepsWorkEnterprises } from 'components/StepsWork/StepsWorkEnterprises';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { Consult } from '../../components/Сonsult/Сonsult';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/Call/Call';

const ForEnterprises = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Section isGradient={true}>
        <Container>
          <OptionEnterprises widthScreen={widthScreen} />
        </Container>
      </Section>
      <Section>
        <Container>
          <BenefitsEnterprises />
        </Container>
      </Section>
      <Section color="true" margBott={'60px'}>
        <Container>
          <Areas widthScreen={widthScreen} />
        </Container>
      </Section>
      <Section paddBott={'0px'} paddTop={'0px'}>
        <Container>
          <ElementsStationEnterprises />
        </Container>
      </Section>
      <Section overX={'hidden'} paddBott={'0px'}>
        <Container>
          <StepsWorkEnterprises />
        </Container>
      </Section>
      <Frontier color={'main'}>
        <Consult widthScreen={widthScreen} />
      </Frontier>
      <Call />
    </GoogleAnalyticsWrapper>
  );
};

export default ForEnterprises;
