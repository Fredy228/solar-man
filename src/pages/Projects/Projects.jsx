import { Container } from 'pages/Common.styled';
import { ProjectsC } from 'components/Portfolio/Projects';
import { Section } from 'pages/OurServices/OurServices.styled';

const Projects = () => {
  return (
    <Section>
      <Container>
        <ProjectsC />
      </Container>
    </Section>
  );
};

export default Projects;
