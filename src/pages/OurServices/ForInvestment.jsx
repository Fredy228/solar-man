import { Container } from 'pages/Common.styled';
import { Section } from './OurServices.styled';
import { OptionInvestment } from 'components/Option/OptionInvestment';
import { BenefitsInvestment } from 'components/Benefits/BenefitsInvestment';
import { ElementsStationInvestment } from 'components/ElementsStation/ElementsStationInvestment';
import { StepsWorkInvestment } from 'components/StepsWork/StepsWorkInvestment';

const ForInvestment = () => {
  return (
    <>
      <Section>
        <Container>
          <OptionInvestment />
        </Container>
      </Section>
      <Section>
        <Container>
          <BenefitsInvestment />
        </Container>
      </Section>
      <Section>
        <Container>
          <ElementsStationInvestment />
        </Container>
      </Section>
      <Section color="true">
        <Container>
          <StepsWorkInvestment />
        </Container>
      </Section>
    </>
  );
};

export default ForInvestment;