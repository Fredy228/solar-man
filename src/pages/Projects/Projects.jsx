import { Container } from 'pages/Common.styled';
import { ProjectsC } from 'components/ui/home/portfolio/Projects';
import { Section } from 'pages/OurServices/OurServices.styled';
import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import { Call } from '../../components/reused/call/Call';

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
