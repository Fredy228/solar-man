import { Container } from 'pages/Common.styled';
import { ProjectsC } from 'components/Portfolio/Projects';
import { Section } from 'pages/OurServices/OurServices.styled';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { Call } from '../../components/Call/Call';

const Projects = () => {
  return (
    <GoogleAnalyticsWrapper>
      <Section>
        <Container>
          <ProjectsC />
        </Container>
      </Section>
      <Call />
    </GoogleAnalyticsWrapper>
  );
};

export default Projects;
