import { Container, Frontier } from 'pages/Common.styled';
import { Section } from './OurServices.styled';
import { OptionEnterprises } from 'components/ui/our-services/option/OptionEnterprises';
import { BenefitsEnterprises } from 'components/ui/our-services/benefits/BenefitsEnterprises';
import { Areas } from 'components/ui/our-services/areas/Areas';
import { ElementsStationEnterprises } from 'components/ui/our-services/elements-station/ElementsStationEnterprise';
import { StepsWorkEnterprises } from 'components/ui/our-services/steps-work/StepsWorkEnterprises';
import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import { Consult } from '../../components/modals/consult/Сonsult';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/reused/call/Call';

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
