import { Container, Frontier } from 'pages/Common.styled';
import { Section } from './OurServices.styled';
import { OptionBackupPower } from 'components/Option/OptionBackupPower';
import { BenefitsBackupPower } from 'components/Benefits/BenefitsBackupPower';
import { ElementsStationBackupPower } from 'components/ElementsStation/ElementsStationBackupPower';
import { StepsWorkBackupPower } from 'components/StepsWork/StepsWorkBackupPower';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { Consult } from '../../components/Сonsult/Сonsult';
import useWindowWidth from '../../services/widthScreen';

const ForBackupPower = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Section>
        <Container>
          <OptionBackupPower />
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
    </GoogleAnalyticsWrapper>
  );
};

export default ForBackupPower;
