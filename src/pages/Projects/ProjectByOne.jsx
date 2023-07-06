import { Container } from '../Common.styled';
import { ProjectsById } from '../../components/Portfolio/ProjectsById';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostsById } from '../../components/API/API';
import { LoadPage } from '../../components/LoadSpiner/LoadPage';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';

const ProjectByOne = () => {
  const { idProject } = useParams();
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!idProject) return;
    const fetchProjectOne = async () => {
      setIsLoading(true);
      const { post } = await getPostsById(idProject);
      setState(post);
      setIsLoading(false);
    };
    fetchProjectOne().catch(console.error);
  }, [idProject]);

  return (
    <GoogleAnalyticsWrapper>
      <Container>
        <div style={{ minHeight: 'calc(100vh - 80px)' }}>
          {isLoading ? <LoadPage /> : <ProjectsById post={state} />}
        </div>
      </Container>
    </GoogleAnalyticsWrapper>
  );
};

export default ProjectByOne;
