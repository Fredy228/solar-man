import { Container } from 'pages/Common.styled';
import { Section } from './OurServices.styled';
import { OptionBackupPower } from 'components/Option/OptionBackupPower';
import { BenefitsBackupPower } from 'components/Benefits/BenefitsBackupPower';
import { ElementsStationBackupPower } from 'components/ElementsStation/ElementsStationBackupPower';
import { StepsWorkBackupPower } from 'components/StepsWork/StepsWorkBackupPower';

const ForBackupPower = () => {
  return (
    <>
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
      <Section>
        <Container>
          <ElementsStationBackupPower />
        </Container>
      </Section>
      <Section color="true">
        <Container>
          <StepsWorkBackupPower />
        </Container>
      </Section>
    </>
  );
};

export default ForBackupPower;