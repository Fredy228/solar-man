import { Container } from 'pages/Common.styled';
import { Section, BoxForm } from './OurServices.styled';
import { OptionEnterprises } from 'components/Option/OptionEnterprises';
import { BenefitsEnterprises } from 'components/Benefits/BenefitsEnterprises';
import { Areas } from 'components/Areas/Areas';
import { ElementsStationEnterprises } from 'components/ElementsStation/ElementsStationEnterprise';
import { StepsWorkEnterprises } from 'components/StepsWork/StepsWorkEnterprises';
import { SendPhone } from 'components/SendPhone/SendPhone';

const ForEnterprises = () => {
  return (
    <>
      <Section>
        <Container>
          <OptionEnterprises />
        </Container>
      </Section>
      <Section>
        <Container>
          <BenefitsEnterprises />
        </Container>
      </Section>
      <Section color="true">
        <Container>
          <Areas />
        </Container>
      </Section>
      <Section>
        <Container>
          <ElementsStationEnterprises />
        </Container>
      </Section>
      <Section color="true">
        <Container>
          <StepsWorkEnterprises />
        </Container>
      </Section>
    </>
  );
};

export default ForEnterprises;
