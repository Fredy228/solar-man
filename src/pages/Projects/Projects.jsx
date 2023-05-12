import { Container } from 'pages/Common.styled';
import { ProjectsC } from 'components/Portfolio/Projects';
import { Section } from 'pages/OurServices/OurServices.styled';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';

const Projects = () => {
  return (
    <GoogleAnalyticsWrapper>
    <Section>
      <Container>
        <ProjectsC />
      </Container>
    </Section>
    </GoogleAnalyticsWrapper>
  );
};

export default Projects;
