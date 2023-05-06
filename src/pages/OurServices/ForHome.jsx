import { Container } from 'pages/Common.styled';
import { Section } from './OurServices.styled';
import { OptionHome } from 'components/Option/OptionHome';
import { BenefitsHome } from 'components/Benefits/BenefitsHome';
import { ElementsStationHome } from 'components/ElementsStation/ElementsStationHome';
import { StepsWorkHome } from 'components/StepsWork/StepsWorkHome';

const ForHome = () => {
  return (
    <>
      <Section>
        <Container>
          <OptionHome />
        </Container>
      </Section>
      <Section>
        <Container>
          <BenefitsHome />
        </Container>
      </Section>
      <Section>
        <Container>
          <ElementsStationHome />
        </Container>
      </Section>
      <Section color="true">
        <Container>
          <StepsWorkHome />
        </Container>
      </Section>
    </>
  );
};

export default ForHome;
