import { Container, Frontier } from 'pages/Common.styled';
import { Section } from './OurServices.styled';
import { OptionBackupPower } from 'components/ui/our-services/option/OptionBackupPower';
import { BenefitsBackupPower } from 'components/ui/our-services/benefits/BenefitsBackupPower';
import { ElementsStationBackupPower } from 'components/ui/our-services/elements-station/ElementsStationBackupPower';
import { StepsWorkBackupPower } from 'components/ui/our-services/steps-work/StepsWorkBackupPower';
import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import { Consult } from '../../components/modals/consult/Сonsult';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/reused/call/Call';

const ForBackupPower = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Section isGradient={true}>
        <Container>
          <OptionBackupPower widthScreen={widthScreen} />
        </Container>
      </Section>
      <Section>
        <Container>
          <BenefitsBackupPower />
        </Container>
      </Section>
      <Section paddBott={'0px'} paddTop={'0px'}>
        <Container>
          <ElementsStationBackupPower />
        </Container>
      </Section>
      <Section overX={'hidden'} paddBott={'0px'}>
        <Container>
          <StepsWorkBackupPower />
        </Container>
      </Section>
      <Frontier color={'main'}>
        <Consult widthScreen={widthScreen} />
      </Frontier>
      <Call />
    </GoogleAnalyticsWrapper>
  );
};

export default ForBackupPower;
